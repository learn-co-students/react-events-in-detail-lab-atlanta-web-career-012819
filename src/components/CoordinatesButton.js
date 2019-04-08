// Code CoordinatesButton Component Here
import React from 'react'

// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
class CoordinatesButton extends React.Component {
    handleClick = event => {
        // This component takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.
        // Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    // Pass this event data in as the argument for the onReceiveCoordinates prop.
    render() {
        return <button onClick={this.handleClick}>Coords</button>
    }
}
// If successful, the current x,y position of your mouse should be logged.
export default CoordinatesButton
