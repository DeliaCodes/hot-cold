import React from "react";
import "./DisplayGame.css";
import GuessForm from "./GuessForm";
import TemperatureOutput from "./TemperatureOutput";
import GuessInfoOutput from "./GuessInfoOutput";

export default class DisplayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50,
      temp: "freezing",
      currentGuess: 0,
      guessNumber: 1,
      guessHistory: []
    };
  }

  handleGuessNumber() {
    const number = this.state.guessNumber;
    let newNumber = number + 1;
    this.setState({ guessNumber: newNumber });
  }

  generateNumber() {
    let myNumber = Math.floor(Math.random() * Math.floor(100));
    this.setState({ number: myNumber });
  }

  compareGuess() {
    let myNumber = this.state.number;
    let guess = this.state.currentGuess;
    let absolute = Math.abs(myNumber - guess);
    if (absolute < 10) {
      return this.setState({ temp: "hot" });
    } else if (absolute < 20 && absolute > 10) {
      return this.setState({ temp: "warm" });
    } else {
      return this.setState({ temp: "cold" });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ currentGuess: event.target.value });
    console.log("submit", event.target.value);
    //  compareGuess();
  }

  render() {
    return (
      <div className="display">
        <TemperatureOutput temperature={this.state.temp} />
        <GuessForm onSubmit={e => this.handleSubmit(e)} />
        <GuessInfoOutput
          guessNumber={this.state.guessNumber}
          guesses={this.state.guessHistory}
        />
      </div>
    );
  }
}
