import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    console.log("Clicked");

    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default BuggyCounter;
