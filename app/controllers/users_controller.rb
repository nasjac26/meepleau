class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_signup_invalid
    def show
        user = User.find_by(id: session[:user_id])
        render json: user
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

    def update
        this_user = User.find(params[:id])
        this_user.update!(user_update_params)
        render json: this_user, status: :ok
    end
    private

    def user_signup_params
        params.require(:username, :password, :password_confirmation, :game_id)
    end

    def user_update_params
        params.permit(:username, :password, :lfg, :game_id, :location, :image, )
    end

    def user_login_params
        params.permit(:username, :password)
    end

    def user_signup_invalid(error_messages)
        render json: { errors: error_messages.record.errors.full_messages }, status: :unprocessable_entity
    end

    
end
