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
    # User.within(4000, :origin => u)
    distance = 10
    min_age = current_user.min_age
    max_age = current_user.max_age

    if params[:user]
      min_age = params[:user][:min_age].to_i
      max_age = params[:user][:max_age].to_i
      distance = params[:user][:distance].to_i
      current_user.update!(min_age: min_age, max_age: max_age)
    # else
    #   min_age = current_user.min_age
    #   max_age = current_user.max_age
    end

    # distance = distance || 10
    # @matches = User.where(:age => (min_age)..(max_age))
    #   .where.not(:id => current_user.id)
    #   .where(:gender => current_user.preference)
    #   .within(distance, :origin => current_user)

    @matches = User.where("username != 'findingDemo'")

    # if params[:user][:distance]
    #   distance = params[:user][:distance].to_i
    #   @matches = @matches.within(distance, :origin => current_user)
    # end

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
