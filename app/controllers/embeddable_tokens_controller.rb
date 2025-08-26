# frozen_string_literal: true

class EmbeddableTokensController < ApplicationController
  def create
    render json: { token: "123" }
  end
end
