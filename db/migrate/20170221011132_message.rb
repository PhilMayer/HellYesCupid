class Message < ActiveRecord::Migration[5.0]
  def change
    add_index :messages, :author_id
    add_index :messages, :thread_id
  end
end
