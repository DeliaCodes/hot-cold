import React from "react";
import GuessForm from "./GuessForm";
import TemperatureOutput from "./TemperatureOutput";

export default class DisplayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display">
        <TemperatureOutput temperature="hot" />
        <GuessForm onSubmit={e => console.log("Guess Form", e)} />
      </div>
    );
  }
}
