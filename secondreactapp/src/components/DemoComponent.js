import React from 'react'

function DemoComponent(props) {

    let {name,city,email} =props
    return (
        <div>
            <h2>Name :{name}</h2>
            <h2>City :{city}</h2>
            <h2>Email :{email}</h2>
        </div>
    )
}

export default DemoComponent
