import React, { Component } from "react";
import logo from "./../../logo.svg";
import "./header.css";

//#f6ec00;
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Like a boss</p>
      </header>
    );
  }
}

export default Header;
