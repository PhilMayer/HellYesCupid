class CreateUserQuestionResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :user_question_responses do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false

      t.timestamps
    end

    add_index :user_question_responses, :user_id
    add_index :user_question_responses, :answer_id
  end
end
