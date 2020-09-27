import React, { Component } from 'react'
import ParticipantForm from './ParticipantForm.js'
import axios from 'axios';


export class NewParticipant extends Component {
    state = {
        id: "-1"
    }
    addParticipant = (temp) => {
        let formData = temp
        axios.post('http://localhost:3000/participants',  formData)
        .then(console.log("done"))
    }
    render() {
        return (
            <div>
                <h2>Create new Participant </h2>
                <ParticipantForm id = {this.state.id}
                    addParticipant = {this.addParticipant}
                />
            </div>
        )
    }
}

export default NewParticipant
