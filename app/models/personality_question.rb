class PersonalityQuestion < ApplicationRecord
  validates :title, presence: true

  has_many :personality_question_answers
end
  
