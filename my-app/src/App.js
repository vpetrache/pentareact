import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Content from "./components/content/content.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vali"
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content name={this.state.name} />
      </div>
    );
  }
}

export default App;
