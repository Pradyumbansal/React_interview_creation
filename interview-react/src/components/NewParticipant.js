import React, { Component } from 'react'
import ParticipantForm from './ParticipantForm.js'
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export class NewParticipant extends Component {
    state = {
        isadded: false,
        id: "-1"
    }
    addParticipant = (temp) => {
        let formData = temp
        axios.post('http://localhost:3000/participants',  formData)
        .then(res => {
            this.setState({isadded: true})
        })
    }
    render() {
        if (this.state.isadded === true) {
            return <Redirect to ="/participants"></Redirect>
        }
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
