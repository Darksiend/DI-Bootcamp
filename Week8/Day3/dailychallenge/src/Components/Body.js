import React, { Component } from "react";
import "./Body.css";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      age: "",
      Destination: "",
      Gender: "",
    };
  }
  handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handler}>
        <div className="inputs-container">
          <input
            type="text"
            name="FirstName"
            onChange={this.handler}
            placeholder="First Name"
          />
          <input
            type="text"
            name="LastName"
            onChange={this.handler}
            placeholder="Last Name"
          />
          <input
            type="number"
            name="age"
            onChange={this.handler}
            placeholder="Age"
          />
        </div>
        <div className="gender-radio">
          <fieldset>
            <legend>Select a gender:</legend>
            <div>
              <input
                type="radio"
                id="male"
                name="Gender"
                onChange={this.handler}
                value="Male"
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="Gender"
                onChange={this.handler}
                value="Female"
              />
              <label htmlFor="female">female</label>
            </div>
          </fieldset>
        </div>
        <div className="select-container">
          <select name="Destination" onChange={this.handler}>
            <option value="default">--Please Choose a destination--</option>
            <option value="Moscow">Moscow</option>
            <option value="Paris">Paris</option>
            <option value="Larnaka">Larnaka</option>
          </select>
        </div>
        <input type="submit" />
        <div>First Name:{this.state.FirstName}</div>
        <div>Last Name:{this.state.LastName}</div>
        <div>Age:{this.state.age}</div>
        <div>Gender:{this.state.Gender}</div>
        <div>Dest:{this.state.Destination}</div>
      </form>
    );
  }
}

export default Body;
