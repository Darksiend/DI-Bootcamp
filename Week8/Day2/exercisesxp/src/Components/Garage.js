import React, { Component } from "react";

class Car extends Component {
  render() {
    return <div> Who lives in my {this.props.size} Garage?</div>;
  }
}

export default Car;
