import React from "react";
import PropTypes from "prop-types";
import bulb from "./../../img_62253.png";
import "./light.css";

function setLight(state) {
  let backgroundColor;
  if (state === 1) {
    backgroundColor = "white";
  } else if (state === 0) {
    backgroundColor = "#f6ec00";
  }
  return backgroundColor;
}

function Light(props) {
  const state = props.lightState;
  const name = props.lightName;

  return (
    <i
      className="bulb"
      data-value={props.lightState}
      style={{ backgroundColor: setLight(state) }}
      onClick={() => {
        props.handleLightChange(state, name);
      }}
    >
      <img src={bulb} className="bulbIcon" alt="bulb" />
      {name}
    </i>
  );
}

Light.propTypes = {
  lightName: PropTypes.string,
  lightState: PropTypes.number,
  handleLightChange: PropTypes.func
};

export default Light;
