class RenameDateToStart < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :start_date, :start
    rename_column :events, :end_date, :end
  end
end
