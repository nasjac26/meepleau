class GameNightsController < ApplicationController
    def index
        render json: GameNight.all, status: :ok
    end

    def show
        game_night = GameNight.find(params[:id])
        render json: game_night, status: :ok
    end

    def create
        new_game_night = GameNight.create!(game_night_params)  
        render json: new_game_night, status: :created
    end

    def update
        this_user = User.find(params[:id])
        this_user.update!(game_id: params[:game_id])
        render json: this_user, status: :ok

    end

    private

    def game_night_params
        params.permit(:user_id, :game_id)
    end
end
