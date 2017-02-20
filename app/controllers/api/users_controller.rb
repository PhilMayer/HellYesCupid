class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    gender = current_user.gender
    case current_user.sexuality
    when "Straight"
      @users = gender == "Man" ? User.where("gender = 'Woman'") : User.where("gender = 'Man'")
    when "Gay"
      @users = gender == "Man" ? User.where("gender = 'Man' and id != #{current_user.id}") :
        User.where("gender = 'Woman' and id != #{current_user.id}")
    else
      @users = User..where("id != #{current_user.id}")
    end

    render 'api/users/index'
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end
end
