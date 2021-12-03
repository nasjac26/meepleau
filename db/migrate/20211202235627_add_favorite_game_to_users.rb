class AddFavoriteGameToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :favorite_game, :integer
  end
end
