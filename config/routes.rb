Rails.application.routes.draw do
  root 'home#index'
  resources :inventions
  get '/bits', to: 'bits#index'
  get '/other_materials', to: 'other_materials#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
