# frozen_string_literal: true

class EmbeddableController < ApplicationController
  # GET /embeddable/:embeddable_id
  def show
    @embeddable       = Embeddable.find_by!(embeddable_id: params[:embeddable_id])
    @embeddable_token = generate_embeddable_token
  rescue ActiveRecord::RecordNotFound
    redirect_to root_path, alert: "Dashboard not found."
  end

private

  def generate_embeddable_token
    token_service = EmbeddableTokenService.new(@embeddable.company, token_params)
    token_service.generate_token
  rescue => e
    Rails.logger.error "Failed to generate embeddable token: #{e.message}"
    nil
  end

  def token_params
    {
      embeddable_id: @embeddable.embeddable_id,
      expires_in:    1.hour,
      user:          current_user,
      environment:   Rails.env,
    }
  end
end
