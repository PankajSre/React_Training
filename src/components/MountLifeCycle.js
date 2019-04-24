import React, { Component } from 'react'

export class MountLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'NIIT'
        }
        console.log('Inside Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('I am Inside getDerivedStateFromProps() ')
        return null;
    }
    componentDidMount() {
        console.log('I am inside componentDidMount() ')
    }
    render() {
        console.log('Inside Render function')
        return (
            <div>
                <h2>Life Cycle Hook Methods</h2>
            </div>
        )
    }
}

export default MountLifeCycle
