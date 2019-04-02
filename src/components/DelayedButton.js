// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }

  handleClick = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }
}

export default DelayedButton;
