// Code DelayedButton Component Here
import React, { Component } from "react";
class DelayedButton extends Component {
  handleOnClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleOnClick}>DELAYYYY</button>;
  }
}

export default DelayedButton;
