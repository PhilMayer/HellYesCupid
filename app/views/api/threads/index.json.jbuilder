@threads.each do |thread|
  json.set! thread.id do
    json.extract! thread, :lover_one_id, :lover_two_id
    json.lastMessage thread.messages.last.body
  end
end
