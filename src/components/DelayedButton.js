// Code DelayedButton Component Here
import React from 'react'

// In the components/DelayedButton.js file, create a DelayedButton React component
class DelayedButton extends React.Component {
    handleClick = event => {
        event.persist()
        setTimeout(() => {
            // This component takes two props: onDelayedClick (a function), and delay (a number).
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    // Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
    render() {
        return <button onClick={this.handleClick}>Delayed</button>
    }
}
// If successful, the event will be logged to the console once the timeout has finished.
export default DelayedButton