// Code DelayedButton Component Here
import React, { Component } from 'react'


export default class DelayedButon extends Component {
    handleClick = (e)=>{
        e.persist()
        setTimeout(()=>this.props.onDelayedClick(e),this.props.delay)
    }
    render() {
      return (
        <button onClick={this.handleClick}>
            Delay
        </button>
      )
    }
}