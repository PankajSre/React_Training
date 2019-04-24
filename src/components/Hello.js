import React from 'react'
// rfce
function Hello(props) {
    const { name, language } = props
    // console.log(props)
    // props.name = 'Raman'
    return (
        <div>
            
            <h1>My Name is {name} and i am learning {language}</h1>
        </div>
    )
}

export default Hello
