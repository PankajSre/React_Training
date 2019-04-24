import React, { Component } from 'react'

export class IncrementNumber extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementNumber()
    {
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick = {() => this.incrementNumber()}>Increment Number</button>
      </div>

    )
  }
}

export default IncrementNumber
