// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }

  handleClick = (e) => {
    const x = e.clientX, y = e.clientY;

    this.props.onReceiveCoordinates([x,y]);
  }
}

export default CoordinatesButton;
