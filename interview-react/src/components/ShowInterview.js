import React, { Component } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
export class ShowInterview extends Component {
    state = {
        interview: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/interviews/'+this.props.match.params.id)
        .then(res => {
            this.setState({ interview: res.data})
        }
        )
    }
    render() {
        return (
            <div>
            <h3>Start Time : {this.state.interview.st_time}</h3>
            <h3>End Time : {this.state.interview.en_time}</h3>
            <h3>Interviewee Name : <NavLink to = {"../ShowParticipant/" + this.state.interview.id1 } > show Interviewee </NavLink></h3>
            <h3>Interviewer Name : <NavLink to = {"../ShowParticipant/" + this.state.interview.id2 } > show Interviewer </NavLink></h3>
            </div>
        )
    }
}

export default ShowInterview
