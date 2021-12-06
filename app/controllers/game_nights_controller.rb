class GameNightsController < ApplicationController
    def index
        render json: GameNight.all
    end

    def show
        game_night = GameNight.find(params[:id])
        render json: game_night, status: :ok
    end

    def create
        game_night = GameNight.create(
            user_id: params[:user_id],
            game_id: params[:game_id]
            )
        game_night.to_json
    end

    def update
        this_user = User.find(params[:id])
        this_user.update!(game_id: params[:game_id])
        render json: this_user, status: :ok

    end
end
