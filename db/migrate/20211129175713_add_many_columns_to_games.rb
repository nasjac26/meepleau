class AddManyColumnsToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :msrp, :integer
    add_column :games, :year_published, :integer
    add_column :games, :min_players, :integer
    add_column :games, :max_players, :integer
    add_column :games, :min_playtime, :integer
    add_column :games, :max_playtime, :integer
    add_column :games, :min_age, :integer
    add_column :games, :description_preview, :text
    add_column :games, :thumb_image, :string
    add_column :games, :small_image, :string
    add_column :games, :medium_image, :string
    add_column :games, :large_image, :string
    add_column :games, :original_image, :string
  end
end
