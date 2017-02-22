class User < ActiveRecord::Migration[5.0]
  def change
    change_column(:users, :min_age, :integer, :default => 18, :null => false)
    change_column(:users, :max_age, :integer, :default => 99, :null => false)
  end
end
