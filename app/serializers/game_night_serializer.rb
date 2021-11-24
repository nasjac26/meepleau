class GameNightSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :integer, :game_id, :integer, :time_played, :time
end
