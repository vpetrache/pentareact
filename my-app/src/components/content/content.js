import React, { Component } from "react";
import "./content.css";
import Card from "../card/card.js";
import PropTypes from "prop-types";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Card />
      </div>
    );
  }
}

Content.PropTypes = {
  name: PropTypes.string
};

export default Content;
