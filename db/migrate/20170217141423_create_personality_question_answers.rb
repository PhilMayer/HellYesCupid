class CreatePersonalityQuestionAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :personality_question_answers do |t|
      t.integer :question_id, null: false
      t.string :answer, null: false

      t.timestamps
    end
    add_index :personality_question_answers, :question_id
  end
end
