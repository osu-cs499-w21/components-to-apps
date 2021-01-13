import React from 'react';

import Toggle from './components/Toggle';

function App(props) {
  // let x = "X";
  return (
    <div>
      <Toggle />
      <button
        onClick={() => {
          console.log("== The button was clicked");
        }}
      >
        This is a button
      </button>
      <a
        href="https://web.engr.oregonstate.edu/~hessro/teaching/cs499-w21"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.preventDefault();
          console.log("== e:", e);
          console.log("  -- e.target:", e.target);
          // console.log("== x:", x);
        }}
      >
        This is a link
      </a>
    </div>
  );
}

export default App;
