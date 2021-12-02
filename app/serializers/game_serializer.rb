class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :msrp, :year_published, :min_players, :max_players, :min_playtime, :max_playtime, :min_age, :description_preview, :thumb_image, :small_image, :medium_image, :large_image, :original_image, :mechanics
end
