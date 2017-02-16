class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :gender, :sexuality, :age, :country, :zipcode,
    :min_age, :max_age, :profile_pic, :summary, :doing_with_life, :really_good_at,
    :favorite_things, :six_things, :think_about, :typical_friday, :message_me_if, :image)
  end
end
