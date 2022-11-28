import React, { Component } from "react";
import Button from "@mui/material/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  vote = (item) => {
    item = { name: item.name, votes: (item.votes += 1) };
    this.setState(item);
  };

  render(props) {
    return (
      <div>
        {this.state.languages.map((item) => (
          <div key={item.name}>
            {item.votes} {item.name}{" "}
            <button
              count={item.votes}
              onClick={() => this.vote(item)}
              variant="outlined"
            >
              +
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
