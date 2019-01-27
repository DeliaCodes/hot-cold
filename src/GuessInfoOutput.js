import React from "react";
import "./GuessInfoOutput.css";

export default function GuessInfoDisplay(props) {
  return (
    <div>
      <p>{props.guessNumber}</p>
      <p>{props.guesses}</p>
    </div>
  );
}
