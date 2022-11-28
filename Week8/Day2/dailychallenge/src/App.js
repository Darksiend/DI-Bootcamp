import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import "./App.css";
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {this.state.languages.map((item) => (
          <Grid item xs={4}>
            {item.votes} {item.name} <Button variant="outlined">+</Button>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default App;
