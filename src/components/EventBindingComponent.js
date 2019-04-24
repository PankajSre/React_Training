import React, { Component } from 'react'

export class EventBindingComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome User'
      }
      this.showMessage = this.showMessage.bind(this)
    }
    showMessage() {
        this.setState({
            message: 'Good Bye!!!'
        })
    }
    showByclassProperty = () => {
        this.setState({
            message: 'Good Bye from Class property'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <div>
            <button onClick={this.showMessage.bind(this)}>Event Binding</button>
            <button onClick={() => this.showMessage()}>Arrow Function</button>
            <button onClick={this.showMessage}> Constructor Binding</button>
            <button onClick = {this.showByclassProperty}>Class Property</button>
        </div>
      </div>
    )
  }
}

export default EventBindingComponent
