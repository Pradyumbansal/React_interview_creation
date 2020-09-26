import React, { Component } from 'react'
import InterviewForm from './InterviewForm.js'
import axios from 'axios';


export class EditInterview extends Component {
    state = {
        id: ""
    }
    addInterview = (temp) => {
        axios.patch('http://localhost:3000/interviews', {
            id1: temp.id1,
            id2: temp.id2,
            st_time: temp.st_time,
            en_time: temp.en_time
        })
        .then(console.log("done"))
    }
    render() {
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
