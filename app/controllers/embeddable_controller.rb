# frozen_string_literal: true

class EmbeddableController < ApplicationController
  before_action :set_embeddable_token

  # GET /embeddable/:id
  def show
    # Show a specific embeddable dashboard
    # @embeddable_token is set by before_action
  end

private

  def set_embeddable_token
    # Generate a token for the current user/company
    token_service = EmbeddableTokenService.new(current_company, token_params)
    @embeddable_token = token_service.generate_token
  rescue => e
    Rails.logger.error "Failed to generate embeddable token: #{e.message}"
    @embeddable_token = nil
  end

  def current_company
    @current_company ||= Company.active.first
  end

  def token_params
    {
      embeddable_id: params[:id],
      expires_in: 1.hour,
      user: current_user,
      environment: Rails.env,
    }
  end
end
