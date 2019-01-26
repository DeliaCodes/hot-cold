import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DisplayGame from "./Display";
import GuessForm from "./GuessForm";
import TempOutput from "./TempOutput";
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
    ReactDOM.render(<GuessForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders TempOutput without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TempOutput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders GuessInfoOutput without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GuessInfoOutput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
