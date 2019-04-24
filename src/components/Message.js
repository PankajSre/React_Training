import React, { Component } from 'react'
// rconst - for creating constructor
export class Message extends Component {
constructor(props) {
  super(props)

  this.state = {
     message: 'Welcome Visitor'
  }
}
changeMessage() {
    this.setState({
        message: 'Thank You for registring With Us!!!!!!'
    })
}
  render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick = {() => this.changeMessage()}>Register</button>
      </div>
    )
  }
}

export default Message
