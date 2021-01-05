import React, { Component } from 'react'

export class ClassComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             eid:1,
             ename:'Raj'
        }
    }
    
    render() {

        let {eid,ename}=this.state
        let {email,city}=this.props
        return (
            <div>
                <h3>Employee ID : {eid}</h3>
                <h3>Employee Name :{ename}</h3>
                <h3>Employee City :{city}</h3>
                <h3>Employee Email :{email}</h3>
            </div>
        )
    }
}

export default ClassComp
