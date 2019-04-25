// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleOnClick = event =>{
        
        const coorAry = []
        coorAry.push(event.clientX)
        coorAry.push(event.clientY)
        
        this.props.onReceiveCoordinates(coorAry)
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>Coords</button>
        );
    }
}

export default CoordinatesButton;
