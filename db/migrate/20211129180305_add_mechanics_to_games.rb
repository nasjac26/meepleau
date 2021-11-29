class AddMechanicsToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :mechanics, :string
  end
end
