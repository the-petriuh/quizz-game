import React, { useState } from 'react';
import Question from './Question';
import quizzData from '../data/mathQuizz';
import EndingScreen from './EndingScreen';

import './Quizz.css';

function Quizz() {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ nextDisabled, setNextDisabled ] = useState(true);
  const [ isOptionsDisabled, setIsOptionsDisabled ] = useState(false);

  function changeQuestion() {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
    setNextDisabled(true);
    setIsOptionsDisabled(false);
  }

  function checkRightOption(SelectOptionIndex) {
    const rightOption = quizzData.questions[currentQuestion].asnwer;
    if (SelectOptionIndex === rightOption) {
      alert("right asnwer")
    } else {
      alert('wrong asnwer');
    }

    setNextDisabled(false);
    setIsOptionsDisabled(true);
  }

  function restart() {
    setCurrentQuestion(0);
  }

  const questions = quizzData.questions.map(question => {
    return (
      <Question
        key={question.id}
        checkRightOption={checkRightOption}
        isOptionsDisabled={isOptionsDisabled}
        {...question}
      />
    );
  });

  return (
    <div className="quizz-container">
      {
        quizzData.questions.length === currentQuestion ? 
          <EndingScreen restart={restart}/>
        : questions[currentQuestion]
      }

      <button
        type="button"
        disabled={nextDisabled}
        className="btn btn-primary"
        id="btn-next"
        onClick={changeQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default Quizz;