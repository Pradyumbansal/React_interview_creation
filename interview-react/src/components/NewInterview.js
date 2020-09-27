import React, { Component } from 'react'
import InterviewForm from './InterviewForm.js'
import axios from 'axios';


export class NewInterview extends Component {
    state = {
        id: "-1"
    }
    addInterview = (temp) => {
        axios.post('http://localhost:3000/interviews', {
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
                <InterviewForm addInterview = {this.addInterview}
                    id = {this.state.id}
                />
            </div>
        )
    }
}

export default NewInterview
