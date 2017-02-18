import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const fetchQuestions = () => (dispatch) => {
  return APIUtil.fetchQuestions()
    .then((questions) => dispatch(receiveQuestions(questions)));
};

// export const submitResponse = (response) => (dispatch) => {
//   return APIUtil.submitResponse()
//     .then()
// }

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});
