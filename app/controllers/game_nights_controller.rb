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
end
