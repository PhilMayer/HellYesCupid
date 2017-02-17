json.extract! user, :username, :id, :gender, :sexuality, :age, :zipcode,
                    :min_age, :max_age, :profile_pic, :summary, :doing_with_life,
                    :really_good_at, :favorite_things, :six_things, :think_about,
                    :typical_friday, :message_me_if

json.image_url user.image.url

json.questionResponses do
  user.question_responses.each do |response|
    json.set! response.answer_id do
      json.extract! response, :id, :answer_id
    end
  end
end
