import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const deadline = new Date("2019-06-09T00:00:00");
ReactDOM.render(<App deadline={deadline} />, document.getElementById("root"));
