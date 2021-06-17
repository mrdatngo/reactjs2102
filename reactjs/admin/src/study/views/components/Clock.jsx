import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      timer: "--:--",
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    // clear (clean up)
    clearInterval(this.tickInterval);
  }

  tick = () => {
    this.tickInterval = setInterval(() => {
      this.setTime();
      console.log("Tick");
    }, 1000);
  };

  setTime = () => {
    let timer = new Date().toLocaleTimeString();
    this.setState({ timer });
  };

  render() {
    return <div>{this.state.timer}</div>;
  }
}

export default Clock;
