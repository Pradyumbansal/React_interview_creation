import React, { Component } from 'react'
import axios from 'axios';
import { Link, NavLink, Redirect } from 'react-router-dom';
export class Participants extends Component {
    state = {
        Participants: [],
        isdelete: false
    }
    componentDidMount() {
        axios.get('http://localhost:3000/participants')
        .then(res => this.setState({ Participants: res.data}))
    }
    delParticipant = (id) => {
        axios.delete(`http://localhost:3000/participants/${id}`)
        .then(res => {
            this.setState({isdelete: true}, () => {
                console.log(this.state.isdelete)
            })
        } )
    }
    render() {
        if (this.state.isdelete === true) {
            return <Redirect to ="/participants"></Redirect>
        }
        return (
            <div>
                <h1> All Participants </h1>
                <Link to ="/newParticipant">New Participant</Link>
                {this.state.Participants.map((participant, index) => (
                    <div key = {index}>
                        <h3>Name : {participant.name}</h3>
                        <h3>Email : {participant.email}</h3>
                        <h3>ParticipantType : {participant.participanttype}</h3>
                        <NavLink to = {"editParticipant/" + participant.id } > Edit Participant </NavLink> |
                        <NavLink to = {"ShowParticipant/" + participant.id } > Show Participant </NavLink> |
                        <button onClick = {this.delParticipant.bind(this, participant.id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Participants
