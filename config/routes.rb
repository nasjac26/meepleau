Rails.application.routes.draw do
  resources :game_nights
  resources :games
  resources :users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/gamenights", to: "game_nights#create"
  patch "/gamenights", to: "game_nights#update"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
