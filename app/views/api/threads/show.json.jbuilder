# if current_user.id == @thread.lover_one_id
#   json.lover @thread.lover_two.username

json.partial! "api/threads/thread", thread: @thread

json.messages @thread.messages, :author_id, :body

# .each do |message|
#   json.set! message.author_id do
#     message.body
#   end
# end
