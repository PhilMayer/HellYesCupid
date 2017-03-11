const calculateMatch = (loverOne, loverTwo) => {
  const firstPercent = subCalc(loverOne, loverTwo);
  const secondPercent = subCalc(loverTwo, loverOne);

  const product = firstPercent * secondPercent;
  const numQuestions = Object.keys(loverOne.questionResponses).length;

  const match_percentage = Math.pow(product, 1 / numQuestions) * 100;
  return Math.round(match_percentage);
};

const subCalc = (lover, otherLover) => {
  let numerator = 0;
  let denomenator = 0;
  let loverQuestions = Object.keys(lover.questionResponses);
  let otherLoverQuestions = Object.keys(otherLover.questionResponses);

  loverQuestions.forEach(question => {
    if (otherLoverQuestions.includes(question)) {
      const loverOneResponses = lover.questionResponses[question];
      const loverTwoResponses = otherLover.questionResponses[question];

      const loverResponseKeys = Object.keys(loverOneResponses);
      const otherLoverResponseKeys = Object.keys(loverTwoResponses);

      const loverResponse = loverOneResponses[loverResponseKeys[loverResponseKeys.length - 1]];
      const otherLoverResponse = loverTwoResponses[otherLoverResponseKeys[otherLoverResponseKeys.length - 1]];

      const weight = loverResponse.weight;
      denomenator += weight;
      if (loverResponse.acceptable_answers
        .includes(otherLoverResponse.answer_id.toString())) {
            numerator += weight;
      }
    }
  });

  return numerator / denomenator;
};


export default calculateMatch;
