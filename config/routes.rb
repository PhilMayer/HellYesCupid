Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :questions, only: :index
    resources :user_question_responses, only: :create
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
  end
end
