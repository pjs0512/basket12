class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token 
    def index
    end
    def create
        @user = User.new(user_params)
        if @user.save
          redirect_to '/'
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end
    
    def update
    end
    private
      
  private
    def user_params
      params.fetch(:user, {}).permit(
          :username, :password, :email , :address
      )
    end
end