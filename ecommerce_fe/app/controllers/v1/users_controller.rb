


module V1
  class UsersController < ApplicationController

    # POST /v1/user
    def create
      @user = User.new(user_params)
    end

    private
    
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
  end
end
