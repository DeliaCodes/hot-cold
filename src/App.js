import React, { Component } from "react";
import "./App.css";
import DisplayGame from "./DisplayGame";

class App extends Component {
  render() {
    return (
      <main className="main">
        <nav className="nav">
          <a href="">What?</a>
          <a href="">+New Game</a>
        </nav>
        <h1>HOT or COLD</h1>
        <h3>a number guessing game</h3>
        <DisplayGame />
      </main>
    );
  }
}

export default App;
