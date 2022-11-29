import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", text: null };
  }

  changeColor = () => {
    setTimeout(() => {
      this.setState({ color: "Yellow" });
    }, 5000);
  };

  changeToPink = () => {
    this.setState({ color: "Pink" });
  };

  componentDidMount() {
    this.changeColor();
  }
  // shouldComponentUpdate() {
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("prev").innerHTML =
      "Previous Name: " + prevState.color;
  }

  componentDidUpdate() {
    if (this.state.text === null) {
      this.setState({ text: "My favorite color is " });
      document.getElementById("new").innerHTML =
        "Previous Name: " + this.state.color;
    }
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.text} {this.state.color}
        </h1>
        <button onClick={this.changeToPink}>Change to blue</button>
      </div>
    );
  }
}

export default Color;
