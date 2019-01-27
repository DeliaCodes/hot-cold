import React from "react";
import "./GuessForm.css";

export default function GuessForm(props) {
  return (
    <form>
      <fieldset>
        <input type="number" defaultValue="Enter Your Guess" />
        <button onSubmit={props.onSubmit} type="submit">
          Guess
        </button>
      </fieldset>
    </form>
  );
}
