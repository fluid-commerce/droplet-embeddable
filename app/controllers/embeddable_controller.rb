# frozen_string_literal: true

class EmbeddableController < ApplicationController
  http_basic_authenticate_with name: ENV.fetch("EMBEDDABLE_AUTH_USERNAME", "admin"),
                               password: ENV.fetch("EMBEDDABLE_AUTH_PASSWORD", "password")

  # GET /embeddable
  def index
    @embeddables = Embeddable.includes(:company).where.not(company_id: nil).order(:name)
  end

  # GET /embeddable/new
  def new
    @embeddable = Embeddable.new
    @companies = Company.active.order(:name)
  end

  # POST /embeddable
  def create
    @embeddable = Embeddable.new(embeddable_params)
    @companies = Company.active.order(:name)

    if @embeddable.save
      redirect_to embeddables_path, notice: "Dashboard was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # GET /embeddable/:embeddable_id/edit
  def edit
    @embeddable = Embeddable.find_by!(embeddable_id: params[:embeddable_id])
    @companies = Company.active.order(:name)
  rescue ActiveRecord::RecordNotFound
    redirect_to embeddables_path, alert: "Dashboard not found."
  end

  # PATCH/PUT /embeddable/:embeddable_id
  def update
    @embeddable = Embeddable.find_by!(embeddable_id: params[:embeddable_id])
    @companies = Company.active.order(:name)

    if @embeddable.update(embeddable_params)
      redirect_to embeddables_path, notice: "Dashboard was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    redirect_to embeddables_path, alert: "Dashboard not found."
  end

  # DELETE /embeddable/:embeddable_id
  def destroy
    @embeddable = Embeddable.find_by!(embeddable_id: params[:embeddable_id])
    @embeddable.destroy
    redirect_to embeddables_path, notice: "Dashboard was successfully deleted."
  rescue ActiveRecord::RecordNotFound
    redirect_to embeddables_path, alert: "Dashboard not found."
  end

private

  def embeddable_params
    params.require(:embeddable).permit(:embeddable_id, :name, :description, :configuration, :default, :company_id)
  end
end
