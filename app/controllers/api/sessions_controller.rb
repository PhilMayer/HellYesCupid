class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { base: ["Invalid username/password"] }, status: 422
    end
  end

  def destroy
    if !current_user
      render status: 404
    else
      logout()
      render json: {}
    end
  end
end
