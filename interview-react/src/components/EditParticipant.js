import React, { Component } from 'react'
import ParticipantForm from './ParticipantForm.js'
import axios from 'axios';


export class EditParticipant extends Component {
    state = {
        id: ""
    }
    addParticipant = (temp) => {
        let formData = temp
        axios.patch('http://localhost:3000/participants/'+  this.props.match.params.id , formData)
        .then(console.log("done"))
    }
    render() {
        return (
            <div>
                <h2> Edit Participant </h2>
                <ParticipantForm 
                    addParticipant = {this.addParticipant}
                    id = {this.props.match.params.id}
                />
            </div>
        )
    }
}

export default EditParticipant
