@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :age, :zipcode, :image

    # json.questionResponses do
    #   user.question_responses.each do |response|
    #     json.set! response.personality_question_answer.question_id do
    #       json.set! response.id do
    #         json.extract! response, :answer_id
    #       end
    #     end
    #   end
    # end
  end
end

# json.users @users.each do |user|
#   json.set! user.id do
#     json.extract! user, :username, :age, :zipcode
#   end
# end
#