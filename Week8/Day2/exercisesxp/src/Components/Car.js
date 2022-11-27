import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <div>
        <header>
          This car is {this.props.car.name} {this.props.car.model} color -{" "}
          {this.state}
        </header>
        <button type="button" onClick={this.changeColor}>
          {" "}
          Change color
        </button>
      </div>
    );
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };
}

export default Car;
