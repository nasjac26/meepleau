class RemoveFavortieGamesFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :favorite_games, :string
  end
end
