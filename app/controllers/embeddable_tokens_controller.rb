# frozen_string_literal: true

class EmbeddableTokensController < ApplicationController
  def create
    render json: EmbeddableTokenService.new(current_company, embeddable_token_params).generate_token
  end

private

  def embeddable_token_params
    params.permit(:embeddable_id, :expires_in, :user, :environment, security_context: {})
  end
end
