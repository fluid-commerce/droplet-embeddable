# frozen_string_literal: true

class EmbeddableCacheRefreshService
  EMBEDDABLE_CACHE_REFRESH_URL = "https://api.us.embeddable.com/api/v1/caching/refresh-contexts".freeze

  attr_accessor :params

  def initialize(params)
    self.params = params
  end

  def refresh_contexts
    request_cache_refresh(params)
  rescue HTTParty::ResponseError => e
    {
      status: :unprocessable_entity,
      errors: { base: [ "Failed to refresh cache contexts from Embeddable: #{e.message}" ] },
    }
  rescue JSON::ParserError => e
    {
      status: :unprocessable_entity,
      errors: { base: [ "Failed to parse response from Embeddable: #{e.message}" ] },
    }
  rescue StandardError => e
    {
      status: :unprocessable_entity,
      errors: { base: [ "Unexpected error: #{e.message}" ] },
    }
  end

private

  def request_cache_refresh(params)
    headers = embeddable_headers
    payload = build_refresh_payload(params)

    response = HTTParty.post(
      EMBEDDABLE_CACHE_REFRESH_URL,
      headers: headers,
      body: payload.to_json,
      timeout: 30
    )

    if response.body.blank?
      { success: true, status: response.code }
    else
      JSON.parse(response.body)
    end
  end

  def embeddable_headers
    {
      "Content-Type"  => "application/json",
      "Accept"        => "application/json",
      "Authorization" => "Bearer #{embeddable_api_key}",
    }
  end

  def embeddable_api_key
    ENV.fetch("EMBEDDABLE_API_KEY") do
      raise StandardError, "EMBEDDABLE_API_KEY environment variable is required"
    end
  end

  def build_refresh_payload(params)
    {
      refreshInterval: params[:refresh_interval] || "1 hour",
      embeddables: build_embeddables(params[:embeddables]),
      scheduledRefreshContexts: build_scheduled_refresh_contexts(params[:scheduled_refresh_contexts]),
      roles: params[:roles] || [ "default" ],
    }.compact
  end

  def build_embeddables(embeddables_params)
    return [] if embeddables_params.blank?

    embeddables_params.map do |embeddable|
      {
        embeddableId: embeddable[:embeddable_id],
        savedVersions: embeddable[:saved_versions] || [ "production" ],
      }
    end
  end

  def build_scheduled_refresh_contexts(contexts_params)
    return [] if contexts_params.blank?

    contexts_params.map do |context|
      security_context = context[:security_context] || {}
      if security_context[:company_id]
        security_context[:company_id] = security_context[:company_id].to_s
      end

      {
        securityContext: build_security_context(security_context),
        environment: context[:environment] || "default",
        timezones: context[:timezones] || [ "UTC" ],
      }
    end
  end

  def build_security_context(custom_context = {})
    base_context = {}

    if custom_context[:company_id]
      base_context[:company_id] = custom_context[:company_id].to_s
    end

    base_context.merge(custom_context || {})
  end
end
