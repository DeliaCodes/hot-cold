import React from "react";

export default function GuessInfoDisplay(props) {
  return (
    <div>
      <p>{props.guessNumber}</p>
      <p>{props.guesses}</p>
    </div>
  );
}
