class GameNightsController < ApplicationController
    def index
        render json: GameNight.all
    end

    def show
        game_night = GameNight.find(params[:id])
        render json: game_night, status: :ok
    end
end
