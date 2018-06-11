import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./growbots_logo_white.svg";
import mazan from "./mazan.jpg";
import "./App.css";

const TimeoutCard = ({ value, label }) => (
  <div className="card">
    <div className="value">{value}</div>
    <div className="label">{label}</div>
  </div>
);

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
        <p className="info">In</p>
        <div className="timeout">
          <TimeoutCard value={days} label="days" />
          <TimeoutCard value={hours} label="hours" />
          <TimeoutCard value={minutes} label="minutes" />
          <TimeoutCard value={seconds} label="seconds" />
        </div>
        <p className="info">
          You'll be <span className="hilite">40 years old</span> Adam!{" "}
          <span role="img">🎉</span>
        </p>
        <img src={mazan} className="mazan" alt="Adam Mazan" />
        <div className="love">
          With&nbsp;<span role="img">❤️</span>&nbsp;from&nbsp;&nbsp;<img
            className="logoWhite"
            src={logo}
            alt="Love ya!"
          />
        </div>
      </div>
    );
  }
}

export default App;
