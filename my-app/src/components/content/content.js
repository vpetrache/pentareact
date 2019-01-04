import React, { Component } from "react";
import "./content.css";
// import Card from "../card/card.js";
import Light from "../light/light.js";
// import Input from "../input/input.js";
import PropTypes from "prop-types";

class Content extends Component {
  render() {
    return (
      <div className="content">
        {/* <Input
          title={this.props.title}
          handleChangeTitle={this.props.handleChangeTitle}
        /> */}

        <div className="lights">
          {this.props.lightsData.map(function(light) {
            return (
              <Light
                key={light.id}
                lightName={light.name}
                lightState={light.lightState}
                handleLightChange={this.props.handleLightChange}
              />
            );
          }, this)}
        </div>

        {/* <Card name={this.props.name} handleClick={this.props.handleClick} />
        {this.props.allData.map(function(item) {
          return (
            <Card
              key={item.id}
              name={item.name}
              handleClick={this.props.handleClick}
            />
          );
        }, this)} */}
      </div>
    );
  }
}

Content.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  handleLightChange: PropTypes.func,
  handleChangeTitle: PropTypes.func,
  handleClick: PropTypes.func
};

export default Content;
