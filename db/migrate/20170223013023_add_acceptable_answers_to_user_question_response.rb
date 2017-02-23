class AddAcceptableAnswersToUserQuestionResponse < ActiveRecord::Migration[5.0]
  def change
    add_column :user_question_responses, :acceptable_answers, :string, default: [], array: true
    add_column :user_question_responses, :weight, :integer
  end
end
