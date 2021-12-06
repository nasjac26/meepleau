class RenameFavoriteGameToGameId < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :favorite_game, :game_id
  end
end
