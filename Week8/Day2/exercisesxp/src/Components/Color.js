import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor = () => {
    setTimeout(() => {
      this.setState({ color: "Yellow" });
    }, 5000);
  };

  changeToBlue = () => {
    this.setState({ color: "Blue" });
  };

  componentDidMount() {
    this.changeColor();
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.color}</h1>
        <button onClick={this.changeToBlue}>Change to blue</button>
      </div>
    );
  }
}

export default Color;
