import React, { Component } from 'react'
import ParticipantForm from './ParticipantForm.js'
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export class EditParticipant extends Component {
    state = {
        isadded: false,
        id: ""
    }
    addParticipant = (temp) => {
        let formData = temp
        axios.patch('http://localhost:3000/participants/'+  this.props.match.params.id , formData)
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
