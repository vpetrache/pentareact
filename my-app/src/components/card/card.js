import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="content-card">
      <h1>{props.name}</h1>
      <button onClick={() => {props.handleClick(props.name)}}>Click me</button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func
};

export default Card;
