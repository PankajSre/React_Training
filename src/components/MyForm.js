import React, { Component } from 'react'

export class MyForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         address: '',
         language: ''
      }
    }
    handleUsernameChange = (event) => {
         this.setState({
             username: event.target.value
         })
    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleLanguageChange = (event) => {
       this.setState({
           language: event.target.value
       })
    }
    handleOnSubmit = (event) => {
       alert(`${this.state.username}  ${this.state.address}  ${this.state.language}`)
       event.preventDefault()
    }
  render() {
    return (
      <form onSubmit = {this.handleOnSubmit}>
          <div>
              <label>Username : </label>
              <input type='text' value = {this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div>
              <label>Address : </label>
              <textarea value = {this.state.address} onChange={this.handleAddressChange}></textarea>
          </div>
          <div>
            <label>Programming Language</label>
            <select value={this.state.language} onChange = {this.handleLanguageChange}>
                <option value ='react'> React programming</option>
                <option value ='angular'> Angular programming</option>
                <option value ='node'> Node</option>
                <option value ='python'> Python programming</option>
            </select>
          </div>
          <div>
              <button type='submit'> Submit</button>
          </div>
      </form>
    )
  }
}

export default MyForm
