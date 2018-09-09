Rails.application.routes.draw do
  
  root to: 'home#index'
  get '/product', to: 'home#index'
  get '/comment', to: 'home#index'
  get '/gallery', to: 'home#index'
  get '/about', to: 'home#index'
  get '/edit', to: 'home#index'
  
  namespace :api, format: 'json' do
    resources :users, only: [:index, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
