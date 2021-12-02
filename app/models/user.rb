class User < ApplicationRecord
    has_many :game_nights
    has_many :games, through: :game_nights

    has_secure_password

    #validations
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 5 }


end
