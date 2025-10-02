class DropletInstalledJob < WebhookEventJob
  # payload - Hash received from the webhook controller.
  # Expected structure (example):
  # {
  #   "company" => {
  #     "fluid_shop" => "example.myshopify.com",
  #     "name" => "Example Shop",
  #     "fluid_company_id" => 123,
  #     "company_droplet_uuid" => "uuid",
  #     "authentication_token" => "token",
  #     "webhook_verification_token" => "verify",
  #   }
  # }
  def process_webhook
    # Validate required keys in payload
    validate_payload_keys("company")
    company_attributes = get_payload.fetch("company", {})

    company = Company.find_by(fluid_shop: company_attributes["fluid_shop"]) || Company.new
    company.assign_attributes(company_attributes.slice(
      "fluid_shop",
      "name",
      "fluid_company_id",
      "authentication_token",
      "webhook_verification_token",
      "droplet_installation_uuid"
    ))
    company.company_droplet_uuid = company_attributes.fetch("droplet_uuid")
    company.active = true

    unless company.save
      Rails.logger.error(
        "[DropletInstalledJob] Failed to create company: #{company.errors.full_messages.join(', ')}"
      )
      return
    end

    register_active_callbacks
    refresh_embeddable_cache
  end

private

  def register_active_callbacks
    client = FluidClient.new
    active_callbacks = ::Callback.active
    installed_callback_ids = []

    active_callbacks.each do |callback|
      begin
        callback_attributes = {
          definition_name: callback.name,
          url: callback.url,
          timeout_in_seconds: callback.timeout_in_seconds,
          active: true,
        }

        response = client.callback_registrations.create(callback_attributes)
        if response && response["callback_registration"]["uuid"]
          installed_callback_ids << response["callback_registration"]["uuid"]
        else
          Rails.logger.warn(
            "[DropletInstalledJob] Callback registered but no UUID returned for: #{callback.name}"
          )
        end
      rescue => e
        Rails.logger.error(
          "[DropletInstalledJob] Failed to register callback #{callback.name}: #{e.message}"
        )
      end
    end

    if installed_callback_ids.any?
      company = get_company
      company.update(installed_callback_ids: installed_callback_ids)
    end
  end

  def refresh_embeddable_cache
    company = get_company
    return unless company

    cache_refresh_params = {
      refresh_interval: "1 hour",
      embeddables: build_embeddables_for_cache_refresh,
      scheduled_refresh_contexts: build_scheduled_refresh_contexts_for_company(company),
      roles: ["default"]
    }

    service = EmbeddableCacheRefreshService.new(cache_refresh_params)
    result = service.refresh_contexts

    if result[:status] == :unprocessable_entity
      Rails.logger.error(
        "[DropletInstalledJob] Failed to refresh Embeddable cache: #{result[:errors][:base].join(', ')}"
      )
    else
      Rails.logger.info(
        "[DropletInstalledJob] Successfully refreshed Embeddable cache for company #{company.id}"
      )
    end
  rescue StandardError => e
    Rails.logger.error(
      "[DropletInstalledJob] Unexpected error refreshing Embeddable cache: #{e.message}"
    )
  end

  def build_embeddables_for_cache_refresh
    [
      {
        embeddable_id: Embeddable.first.embeddable_id,
        saved_versions: ["production"]
      }
    ]
  end

  def build_scheduled_refresh_contexts_for_company(company)
    [
      {
        security_context: {
          company_id: company.fluid_company_id
        },
        environment: "default",
        timezones: ["UTC"]
      }
    ]
  end
end
