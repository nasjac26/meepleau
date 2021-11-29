class RenameNameToTitle < ActiveRecord::Migration[6.1]
  def change
    rename_column :games, :name, :title
  end
end
