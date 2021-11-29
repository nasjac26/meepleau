class User < ApplicationRecord
    has_many :game_nights
    has_many :games, through: :game_nights

    has_secure_password

end
