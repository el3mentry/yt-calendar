import React from "react";

const Controls = ({ prev, initCal, next }) => {
  return (
    <div className="controls" data-testid="controls">
      <button className="btn back" onClick={() => prev()} data-testid="back">
        Back
      </button>

      <button className="btn now" onClick={() => initCal()} data-testid="now">
        Reset
      </button>

      <button className="btn next" onClick={() => next()} data-testid="next">
        Next
      </button>
    </div>
  );
};

export default Controls;
