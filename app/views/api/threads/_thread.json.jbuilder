if current_user.id == thread.lover_one_id
  json.loverId thread.lover_two.id
  json.lover thread.lover_two.username
  json.thumb thread.lover_two.image
else
  json.loverId thread.lover_one.id
  json.lover thread.lover_one.username
  json.thumb thread.lover_one.image
end
