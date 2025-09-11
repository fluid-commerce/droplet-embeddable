class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def store_dri_in_session
    dri = params[:dri]

    if dri.present?
      session[:dri] = dri
    elsif session[:dri].blank?
      render json: { error: "DRI parameter is required" }, status: :bad_request
    end
  end

  def find_company_by_dri
    dri = session[:dri]

    unless dri.present?
      render json: { error: "DRI parameter is required" }, status: :bad_request
    end

    @company = Company.find_by(droplet_installation_uuid: dri)

    unless @company
      render json: { error: "Company not found with DRI: #{dri}" }, status: :not_found
    end
  end

protected

  def after_sign_in_path_for(resource)
    admin_dashboard_index_path
  end

  def current_ability
    @current_ability ||= Ability.new(user: current_user)
  end
end
