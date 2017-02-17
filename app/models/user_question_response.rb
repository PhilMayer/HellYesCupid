class UserQuestionResponse < ApplicationRecord
  validates :user_id, :answer_id, presence: true

  belongs_to :user
  belongs_to :personality_question_answers
end
