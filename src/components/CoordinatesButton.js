import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  mouseyClick = event => {
    // const x = event.clientX
    // const y = event.clientY
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

   render () {
    return (
      <button onClick={this.mouseyClick}> Clickey Me </button>
    ) }

}
