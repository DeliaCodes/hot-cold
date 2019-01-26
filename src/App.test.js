import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DisplayGame from "./DisplayGame";
import GuessForm from "./GuessForm";
import TemperatureOutput from "./TemperatureOutput";
import GuessInfoOutput from "./GuessInfoOutput";

describe("rendering without crashing", () => {
  it("renders App without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders DisplayGame without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DisplayGame />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders GuessForm without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <GuessForm onSubmit={e => console.log("Guess Form", e)} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders TempOutput without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TemperatureOutput temperature="hot" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders GuessInfoOutput without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GuessInfoOutput guesses="2, 89" guessNumber="3" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
