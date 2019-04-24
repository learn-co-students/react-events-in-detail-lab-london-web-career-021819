// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    // go into your props, find the one called onRecieveCoordinates, invoke it with the x and y from the event
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Clicky</button>;
  }
}

export default CoordinatesButton;
