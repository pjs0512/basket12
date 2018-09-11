class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token 
  def new
  end
  def create
      user = User.find_by(email: params[:user][:email])
      if user && User.find_by(password: params[:user][:password])
         session[:user_id] = user.id
      else
         flash.now[:alert] = "이메일 또는 패스워드가 잘못되었습니다."
         render 'new'
      end
  end
  def destroy
      log_out
      redirect_to :root
  end
  private
  def login_params
    params.require(:user,{}).permit(
      :email, :password)
  end
end
