import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  static propTypes = {
    deadline: PropTypes.instanceOf(Date)
  };

  constructor(props) {
    super(props);

    this.state = this.computeTimeouts();
    setInterval(() => this.setState(this.computeTimeouts()), 1000);
  }

  computeTimeouts() {
    const now = new Date().getTime();
    const diff = this.props.deadline.getTime() - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {days}, {hours}, {minutes}, {seconds}
        </p>
      </div>
    );
  }
}

export default App;
