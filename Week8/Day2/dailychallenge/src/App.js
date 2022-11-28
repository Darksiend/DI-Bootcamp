import React, { Component } from "react";

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
  render(props) {
    return (
      <div>
        {this.state.languages.map((item) => (
          <div className="voteItem">
            {item.votes} {item.name} <button>+</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
