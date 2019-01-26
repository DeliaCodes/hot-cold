import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DisplayGame from "./Display";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Renders DisplayGame without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DisplayGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
