import React, { Component } from "react";
import Garage from "./Garage";
import Events from "./Events";

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
          <Garage size="small" />
          <Events />
        </header>
      </div>
    );
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };
}

export default Car;
