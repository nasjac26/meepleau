class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :lfg, :image, :location, :favorite_game, :game_id


  def favorite_game
    Game.find(object.game_id)
  end
end
