// Code CoordinatesButton Component Here
import React, { Component } from "react";
class CoordinatesButton extends Component {
 
  handleOnClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
  render() {
    return <button onClick={this.handleOnClick}>CLICK IT</button>;
  }
}

export default CoordinatesButton;
