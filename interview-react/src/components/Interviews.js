import React, { Component } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Redirect} from 'react-router-dom'
export class Interviews extends Component {
    state = {
        isdelete: false,
        interviews: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/interviews')
        .then(res => this.setState({ interviews: res.data}))
    }
    delInterview = (id) => {
        axios.delete(`http://localhost:3000/interviews/${id}`)
        .then(res => {
            this.setState({isdelete: true});
        } )
    }
    render() {
        if (this.state.isdelete === true) {
            return <Redirect to = "/"></Redirect>
        }
        return (
            <div>
                <h1> All Interviews </h1>
                <Link to ="/newInterview">New Interview</Link>
                {this.state.interviews.map((interview, index) => (
                    <div key = {index}>
                        <h3>Start Time : {interview.start_time}</h3>
                        <h3>End Time : {interview.end_time}</h3>
                        <h3>Interviewee Name : {interview.interviewee.name}</h3>
                        <h3>Interviewer Name : {interview.interviewer.name}</h3>
                        <NavLink to = {"editInterview/" + interview.id } > Edit Interview </NavLink>|
                        <NavLink to = {"ShowInterview/" + interview.id } > Show Interview </NavLink>
                        <button onClick = {this.delInterview.bind(this, interview.id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Interviews
