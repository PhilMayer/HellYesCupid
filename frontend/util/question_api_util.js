export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: 'api/questions'
  });
};

export const submitResponse = (response) => {
  return $.ajax({
    method: "POST",
    url: 'api/user_question_responses',
    data: {user_question_response: response}
  });
};
