import React from "react";
import "./TemperatureOutput.css";

export default function TemperatureOutput(props) {
  return <p className="output temperature">{props.temperature}</p>;
}
