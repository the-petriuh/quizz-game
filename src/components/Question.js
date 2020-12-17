import React, { useState } from 'react';

import './Question.css';

function Question(props) {

  const [ nextDisabled, setNextDisabled ] = useState(true);
  const [ isOptionsDisabled, setIsOptionsDisabled ] = useState(false);

  function checkRightOption(selectedOptionIndex) {
    const rightOption = props.asnwer;
    const btns = document.querySelectorAll('#option-btn');

    btns[rightOption].className = "question-option btn btn-success";

    if (selectedOptionIndex !== rightOption) {
      btns[selectedOptionIndex].className = "question-option btn btn-danger";
    }

    setNextDisabled(false);
    setIsOptionsDisabled(true);
  }

  const questionOptions = props.options.map((opt, index) => {
    return (
      <button
        key={index}
        onClick={() => { checkRightOption(index) }}
        type="button"
        id="option-btn"
        className="question-option btn btn-primary"
        disabled={isOptionsDisabled}>
      {opt}
      </button>
    )
  });

  return (
    <div className="question">
      <h1 className="question-head bg-primary text-light">{props.head}</h1>
      <div className="options">

        {questionOptions}
      
      </div>
      <br/>
      <button
        type="button"
        disabled={nextDisabled}
        className="btn btn-primary"
        id="btn-next"
        onClick={props.changeQuestion}
      >
        Next
      </button>

    </div>
  );
}

export default Question;