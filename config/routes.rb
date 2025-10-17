Rails.application.routes.draw do
  root "home#index"

  devise_for :users

  post "webhook", to: "webhooks#create", as: :webhook
  post "embeddable_tokens", to: "embeddable_tokens#create", as: :embeddable_tokens

  # Embeddable dashboard routes
  get "embeddable", to: "embeddable#index", as: :embeddables
  get "embeddable/new", to: "embeddable#new", as: :new_embeddable
  post "embeddable", to: "embeddable#create"
  get "embeddable/:embeddable_id/edit", to: "embeddable#edit", as: :edit_embeddable
  patch "embeddable/:embeddable_id", to: "embeddable#update"
  delete "embeddable/:embeddable_id", to: "embeddable#destroy"
  get "embeddable/:embeddable_id", to: "embeddable_show#show", as: :embeddable_show

  namespace :admin do
    get "dashboard/index"
    resource :droplet, only: %i[ create update ]
    resources :settings, only: %i[ index edit update ]
    resources :users
    resources :callbacks, only: %i[ index show edit update ] do
      post :sync, on: :collection
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
