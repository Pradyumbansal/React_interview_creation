import React, { Component } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
export class Participants extends Component {
    state = {
        Participants: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/participants')
        .then(res => this.setState({ Participants: res.data}))
    }
    render() {
        return (
            <div>
                <h1> All Interviews </h1>
                <Link to ="/newParticipant">New Participant</Link>
                {this.state.Participants.map((participant, index) => (
                    <div key = {index}>
                        <h3>Name : {participant.name}</h3>
                        <h3>Email : {participant.email}</h3>
                        <h3>ParticipantType : {participant.participanttype}</h3>
                        <NavLink to = {"editParticipant/" + participant.id } > Edit Participant </NavLink>
                    </div>
                ))}
            </div>
        )
    }
}

export default Participants
