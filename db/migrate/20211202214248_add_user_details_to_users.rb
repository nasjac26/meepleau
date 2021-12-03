class AddUserDetailsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :location, :string
    add_column :users, :free_nights, :string
    add_column :users, :lfg, :boolean
    add_column :users, :favorite_games, :string
  end
end
