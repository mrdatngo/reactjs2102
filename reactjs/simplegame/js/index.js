class SimpleGame extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfGuessing: 0,
    };
  }

  changeNumberOfGuessing = (numberOfGuessing) => {
    this.setState({ numberOfGuessing });
  };

  render() {
    return (
      <div>
        <Header numberOfGuessing={this.state.numberOfGuessing} />
        <Main
          changeNumberOfGuessing={this.changeNumberOfGuessing}
          numberOfGuessing={this.state.numberOfGuessing}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("props: ", this.props);
  }

  render() {
    return (
      <div
        className={
          "header text-center jumbotron " +
          (this.props.numberOfGuessing > 7 ? "bg-danger" : "")
        }
      >
        <h1>Guessing random number</h1>
        <p>We random a number, can you guess it?</p>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: this.randomNumber(),
      valueNumber: 0,
      message: "",
    };
  }

  newGame = () => {
    this.setState({
      randomNumber: this.randomNumber(),
      valueNumber: 0,
      message: "",
    });
  };

  randomNumber = () => {
    return Math.ceil(Math.random() * 100);
  };

  guess = () => {
    let { randomNumber, valueNumber } = this.state;
    let { numberOfGuessing, changeNumberOfGuessing } = this.props;
    let message = "";
    if (randomNumber > valueNumber) {
      // set message "You guess smaller" to p message
      // document.getElementById("message").value = "You guess smaller" <= dont do it
      message = "You guess smaller";
    } else if (randomNumber < valueNumber) {
      message = "You guess bigger";
    } else {
      message = "Congrat!!!";
    }
    this.setState({
      message,
      valueNumber: 0,
    });
    changeNumberOfGuessing(numberOfGuessing + 1);
  };

  inputChange = (event) => {
    this.setState({
      valueNumber: Number(event.target.value),
    });
  };
  render() {
    return (
      <div className="main">
        <button onClick={this.newGame}>New Game</button>
        <hr />
        <p>Number of guessed: {this.props.numberOfGuessing}</p>
        <p>Enter guessing number: </p>
        <input
          value={this.state.valueNumber}
          onChange={this.inputChange}
          type="number"
        />
        <button onClick={this.guess} className="btn-success">
          Guess
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(<SimpleGame />, document.getElementById("app"));
