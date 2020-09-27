import React, { Component } from 'react'
import axios from 'axios'

export class ShowParticipant extends Component {
    state = {
        participant: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/participants/'+this.props.match.params.id)
        .then(res => this.setState({ participant: res.data}),
        () => {
            console.log(this.state)
        }
        )
    }

    render() {
        return (
            <div>    
                <h3>Name : {this.state.participant.name}</h3>
                <h3>Email : {this.state.participant.email}</h3>
                <h3>participanttype : {this.state.participant.participanttype}</h3>
                <h3>Interviewer Name : <a href={"http://localhost:3000/"+this.state.participant.resume}>resume</a></h3>
            </div>
        )
    }
}

export default ShowParticipant
