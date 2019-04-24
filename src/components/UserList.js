import React from 'react'

function UserList() {
    const names = ['Jyoti','Suvarna','Sandipan','Amitabha']
    const nameList = names.map((name) => <h2>{name}</h2>)
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2> */}

      {/* {
          names.map((name) => <h2>{name}</h2>)
      } */}

      {nameList}
    </div>
  )
}

export default UserList
