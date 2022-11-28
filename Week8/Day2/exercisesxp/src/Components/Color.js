import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor = () => {
    console.log("!!!!!!");
  };

  componentDidMount() {
    console.log("Added");
    setTimeout(changeColor, 5000);
  }

  render() {
    return <h1>My favorite color is {this.state.color}</h1>;
  }
}

export default Color;
