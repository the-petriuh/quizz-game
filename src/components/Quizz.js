import React, { useState } from 'react';
import Question from './Question';
import quizzData from '../data/mathQuizz';
import EndingScreen from './EndingScreen';

import './Quizz.css';

function Quizz() {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  function changeQuestion() {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  }

  function restart() {
    setCurrentQuestion(0);
  }

  const questions = quizzData.questions.map(question => {
    return (
      <Question
        key={question.id}
        changeQuestion={changeQuestion}
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
    </div>
  );
}

export default Quizz;