class Message < ApplicationRecord
  validates :author_id, :thread_id, :body, presence: true

  belongs_to(
    :user,
    foreign_key: :author_id,
    class_name: "User"
  )

  belongs_to(
    :thread,
    foreign_key: :thread_id,
    class_name: "Conversation"
  )
end
