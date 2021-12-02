class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_signup_invalid
    def show
        render json: User.find(params[:id])
    end

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_signup_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end
    private

    def user_signup_params
        params.permit(:username, :password, :password_confirmation)
    end

    def user_login_params
        params.permit(:username, :password)
    end

    def user_signup_invalid(error_messages)
        render json: { errors: error_messages.record.errors.full_messages }, status: :unprocessable_entity
    end

    
end
