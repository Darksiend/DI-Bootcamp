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

  componentDidMount() {
    this.changeColor();
  }

  render() {
    return <h1>My favorite color is {this.state.color}</h1>;
  }
}

export default Color;
