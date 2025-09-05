Rails.application.routes.draw do
  root "home#index"

  devise_for :users

  post "webhook", to: "webhooks#create", as: :webhook
  post "embeddable_tokens", to: "embeddable_tokens#create", as: :embeddable_tokens

  # Embeddable dashboard route - show only
  get "embeddable/:embeddable_id", to: "embeddable#show", as: :embeddable

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
