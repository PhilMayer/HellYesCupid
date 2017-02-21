json.extract! @thread, :lover_one_id, :lover_two_id

json.messages @thread.messages, :author_id, :body

# .each do |message|
#   json.set! message.author_id do
#     message.body
#   end
# end
