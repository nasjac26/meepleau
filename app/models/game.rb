class Game < ApplicationRecord
    has_many :game_nights
    has_many :users, through: :game_nights
end
