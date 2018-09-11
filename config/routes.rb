Rails.application.routes.draw do
  
  root to: 'home#index'
  get '/product', to: 'home#index'
  get '/comment', to: 'home#index'
  get '/gallery', to: 'home#index'
  get '/about', to: 'home#index'
  get '/edit', to: 'home#index'
  
  namespace :api, format: 'json' do
    resources :users, only: [:index, :create, :update]
    resources :sessions, only: [:new, :create, :destroy]
  end
end
