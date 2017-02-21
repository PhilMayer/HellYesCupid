class Conversation < ApplicationRecord
  validates :lover_one_id, :lover_two_id, presence: true

  has_many(
    :messages,
    -> {order(created_at: :asc)},
    foreign_key: :thread_id,
    class_name: "Message"
  )

  belongs_to :lover_one,
    class_name: "User",
    foreign_key: :lover_one_id

  belongs_to :lover_two,
    class_name: "User",
    foreign_key: :lover_two_id
end
