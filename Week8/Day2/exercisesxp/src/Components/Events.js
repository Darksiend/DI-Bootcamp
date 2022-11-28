import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, buttonText: "On" };
  }

  toggle = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      buttonText: this.state.isToggleOn ? "Off" : "On",
    });
  };

  clickMe = () => {
    alert("I was clicked!");
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.clickMe}>
          Click Me!
        </button>
        <input onKeyPress={this.handleKeyPress} />
        <button type="button" onClick={this.toggle}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default Events;
