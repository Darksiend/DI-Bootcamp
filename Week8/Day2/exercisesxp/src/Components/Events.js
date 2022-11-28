import React, { Component } from "react";

class Events extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.clickMe}>
          Click Me!
        </button>
        <input onKeyPress={this.handleKeyPress} />
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
}

export default Events;
