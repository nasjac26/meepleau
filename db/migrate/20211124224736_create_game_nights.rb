class CreateGameNights < ActiveRecord::Migration[6.1]
  def change
    create_table :game_nights do |t|
      t.integer :user_id
      t.integer :game_id
      t.time :time_played

      t.timestamps
    end
  end
end
