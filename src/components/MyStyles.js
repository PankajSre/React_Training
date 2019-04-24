import React from 'react'
import './MyStyle.css'

function MyStyles(props) {
    let className = props.primary? 'primary': ''
    return (
        <div>
            <h2 className={`${className} font-8p`}> This is My Custom Styling</h2>
        </div>
    )
}
export default MyStyles