# frozen_string_literal: true

class EmbeddableTokensController < ApplicationController
  before_action :authenticate_user!

  def create
    render json: EmbeddableTokenService.new(current_company, embeddable_token_params).generate_token
  end

private

  def current_company
    @current_company ||= Company.active.first
  end

  def embeddable_token_params
    params.permit(:embeddable_id, :expires_in, :user, :environment, security_context: {})
  end
end
