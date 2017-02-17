class PersonalityQuestionAnswer < ApplicationRecord
  validates :question_id, :answer, presence: true

  belongs_to(
    :personality_question,
    foreign_key: :question_id,
    class_name: "PersonalityQuestion"
  )

  has_many :user_question_responses
end
