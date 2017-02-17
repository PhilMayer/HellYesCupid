class PersonalityQuestion < ApplicationRecord
  validates :title, presence: true

  has_many(
    :answers,
    foreign_key: :question_id,
    class_name: "PersonalityQuestionAnswer"
  )
end
