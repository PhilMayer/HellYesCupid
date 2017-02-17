class CreatePersonalityQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :personality_questions do |t|
      t.string :title, null: false

      t.timestamps
    end
  end
end
