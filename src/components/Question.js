import React from 'react';

import './Question.css';

function Question(props) {

  const questionOptions = props.options.map((opt, index) => {
    return (
      <button
        key={index}
        onClick={() => { props.checkRightOption(index) }}
        type="button"
        className="question-option btn btn-primary"
        disabled={props.isOptionsDisabled}>
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
    </div>
  );
}

export default Question;