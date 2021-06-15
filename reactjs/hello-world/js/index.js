// let h2 = React.createElement("h2", null, "ReactJS Hello world");

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: "--:--",
    };
    // this.tick();
  }

  tick = () => {
    this.setState({
      timer: new Date().toLocaleTimeString(),
    });
    setInterval(() => {
      //   this.state.timer = new Date().toLocaleTimeString(); Don't do this
      this.setState({
        timer: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  run = () => {
    this.tick();
  };

  render() {
    console.log("Render");
    return (
      <div>
        Timer: {this.state.timer}
        <br />
        <button onClick={this.run}>Run</button>
        <button>Stop</button>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("app"));
