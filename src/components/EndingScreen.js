import React from 'react';

import './EndingScreen.css';

function EndingScreen(props) {
  return (
    <div className="message">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Finished</h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.restart}
          >
            restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndingScreen;