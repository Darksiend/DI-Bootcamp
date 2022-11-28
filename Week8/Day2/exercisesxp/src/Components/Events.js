import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.clickMe}>
          Click Me!
        </button>
        <input onKeyPress={this.handleKeyPress} />
        <button type="button" onClick={this.toggle}></button>
      </div>
    );
  }
  clickMe = () => {
    alert("I was clicked!");
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
    }
  };
  toggle = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });

    console.log(this.state.isToggleOn);
  };
}

export default Events;
