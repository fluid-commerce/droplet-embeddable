# frozen_string_literal: true

class EmbeddableTokenService
  EMBEDDABLE_API_URL = "https://api.us.embeddable.com/api/v1/security-token".freeze

  attr_accessor :company, :params

  def initialize(company, params)
    self.company = company
    self.params  = params
  end

  def generate_token
    request_embeddable_token(company, params)
  rescue HTTParty::ResponseError => e
    {
      status: :unprocessable_entity,
      errors: { base: [ "Failed to retrieve token from Embeddable: #{e.message}" ] },
    }
  rescue StandardError => e
    {
      status: :unprocessable_entity,
      errors: { base: [ "Unexpected error: #{e.message}" ] },
    }
  end

private

  def request_embeddable_token(company, params)
    headers = embeddable_headers
    payload = build_embeddable_payload(company, params)

    response = HTTParty.post(
      method:  :post,
      url:     EMBEDDABLE_API_URL,
      headers:,
      payload: payload.to_json,
      timeout: 30
    )

    JSON.parse(response.body)
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

  def build_embeddable_payload(company, params)
    {
      embeddableId:    params[:embeddable_id],
      expiryInSeconds: params[:expires_in] || 3600,
      securityContext: build_security_context(company, params[:security_context]),
      user:            params[:user] || "company_#{company.id}",
      environment:     params[:environment] || "default",
    }.compact
  end

  def build_security_context(company, custom_context = {})
    base_context = {
      companyId:   company.id,
      companyName: company.name,
    }

    base_context.merge(custom_context || {})
  end
end
