Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :messages, only: :create
    resources :questions, only: :index
    resources :user_question_responses, only: :create
    resources :threads, only: [:create, :index, :show]
    resources :users, only: [:index, :create, :show, :update]
  end
end
