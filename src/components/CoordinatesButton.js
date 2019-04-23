import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleOnClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render () {
    return (
      <button onClick={this.handleOnClick}>Click Moi</button>
    )
  }
}

export default CoordinatesButton