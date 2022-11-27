import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red" };
  }
  render(props) {
    return (
      <div>
        <header>
          This car is {this.props.name} :{this.props.model} color -{" "}
          {this.state.color}
        </header>
      </div>
    );
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };
}

export default Car;
