class GamesController < ApplicationController
    def show
        render json: Game.find(params[:id])
    end

    def index
        render json: Game.all
    end
    
    def create
        user = Game.create!(user_signup_params)
    end

    private

    def game_register_params
        params.require(:title, :genre).permit(:msrp,:year_published,:min_players,:max_players,:min_playtime,:max_playtime,:min_age,:description_preview,:thumb_image,:small_image,:medium_image,:large_image,:original_image,:mechanics)
    end
end
