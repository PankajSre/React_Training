import React, { Component } from 'react'

export class LoginUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoogedIn: true
        }
    }

    render() {
        // let message
        // if (this.state.isLoogedIn) {
        //     message = <h2>Welcome User</h2>
        // } else {
        //     message = <h2> Welcome Guset</h2>
        // }
        // return <div>{message}</div>

        // return (this.state.isLoogedIn) ?
        //     <h2>Welcome User.....</h2> :
        //     <h2>Welcome Guest......</h2>

        return this.state.isLoogedIn && <h1>Welcome Suvarna!!!</h1>
    }
}

export default LoginUser
