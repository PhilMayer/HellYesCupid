class CreateConversations < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.integer :lover_one_id, null: false
      t.integer :lover_two_id, null: false

      t.timestamps
    end
    add_index :conversations, :lover_two_id
    add_index :conversations, :lover_one_id
  end
end
