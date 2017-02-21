class Conversation < ApplicationRecord
  validates :lover_one_id, :lover_two_id, presence: true

  has_many(
    :messages,
    foreign_key: :thread_id,
    class_name: "Message"
  )
end
