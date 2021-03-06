json.questionResponses do
  user.question_responses.each do |response|
    json.set! response.personality_question_answer.question_id do
      json.set! response.id do
        json.extract! response, :answer_id, :acceptable_answers, :weight
      end
    end
  end
end
