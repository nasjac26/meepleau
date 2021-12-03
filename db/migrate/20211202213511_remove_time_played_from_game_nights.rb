class RemoveTimePlayedFromGameNights < ActiveRecord::Migration[6.1]
  def change
    remove_column :game_nights, :time_played, :time
  end
end
