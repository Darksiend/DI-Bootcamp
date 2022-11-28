import React, { Component } from "react";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState({ color: "Blue" });
  };
  render() {
    return (
      <div>
        <h1>My Phone is a {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change Color!</button>
      </div>
    );
  }
}

export default Phone;
