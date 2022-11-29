import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  handleClick = () => {};
  render() {
    return (
      <div>
        <h1></h1>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default BuggyCounter;
