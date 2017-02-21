@threads.each do |thread|
  json.set! thread.id do
    json.extract! thread, :lover_one_id, :lover_two_id
    json.lastMessage thread.messages.last.body

    if current_user.id == thread.lover_one_id
      json.lover thread.lover_two.username
      json.thumb thread.lover_two.image
    else
      json.lover thread.lover_one.username
      json.thumb thread.lover_one.image
    end
  end
end
