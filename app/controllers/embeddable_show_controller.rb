# frozen_string_literal: true

class EmbeddableShowController < ApplicationController
  before_action :store_dri_in_session, only: [ :show ]
  before_action :find_company_by_dri, only: [ :show ]

  # GET /embeddable/:embeddable_id
  def show
    @company_embeddables = @company&.embeddables&.order(:name) || []

    @embeddable = Embeddable.find_by(embeddable_id: params[:embeddable_id])

    unless @embeddable
      redirect_to root_path, alert: "Dashboard not found."
      return
    end

    if @company_embeddables.any?
      unless @embeddable.company_id == @company&.id
        default_embeddable = @company_embeddables.find(&:default?)
        @embeddable = default_embeddable || @company_embeddables.first
      end
    else
      @embeddable = Embeddable.first
    end

    @embeddable_token = generate_embeddable_token

    @show_selector = @company_embeddables.any? && @company_embeddables.count > 1
  rescue ActiveRecord::RecordNotFound
    redirect_to root_path, alert: "Dashboard not found."
  end

private

  def generate_embeddable_token
    token_service = EmbeddableTokenService.new(@company, token_params)
    token_service.generate_token
  rescue => e
    Rails.logger.error "Failed to generate embeddable token: #{e.message}"
    nil
  end

  def token_params
    {
      embeddable_id: @embeddable.embeddable_id,
      expires_in:    1.hour,
    }
  end
end
