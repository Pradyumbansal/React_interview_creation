import React, { Component } from 'react'
import InterviewForm from './InterviewForm.js'
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export class EditInterview extends Component {
    state = {
        id: "",
        isadded: false
    }
    addInterview = (temp) => {
        axios.patch('http://localhost:3000/interviews/'+ this.props.match.params.id, {
            id1: temp.id1,
            id2: temp.id2,
            st_time: temp.st_time,
            en_time: temp.en_time
        })
        .then(res => {
            this.setState({isadded: true})
        })
    }
    render() {
        if (this.state.isadded === true) {
            return <Redirect to = "/"></Redirect>
        }
        return (
            <div>
                <h2>Create new Interview</h2>
                <InterviewForm Interview = {this.state.interview}
                    addInterview = {this.addInterview}
                    id = {this.props.match.params.id}
                />
            </div>
        )
    }
}

export default EditInterview
