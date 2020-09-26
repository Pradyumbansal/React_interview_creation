import React, { Component } from 'react'
import axios from 'axios';
export class InterviewForm extends Component {
    state = {
            st_time: "",
            en_time: "",
            id1: "",
            id2: "",
            id: "",
            Interviewee: [],
            Interviewer: []
    }
    componentDidMount() {
        this.setState({isloading: true})
        const temp1 = []
        const temp2 = []
        axios.get('http://localhost:3000/')
        .then(res => {
            this.setState({id: this.props.id})
            res.data.map((cur) =>  {
                if(cur.participanttype === 'Interviewee') {
                    temp1.push({
                        "id": cur.id,
                        "label": cur.name
                    })
                }
                else {
                    temp2.push({
                        "id": cur.id,
                        "label": cur.name
                    })
                    }
                    return 'res';
            } )
            this.setState({Interviewee: temp1})
            this.setState({Interviewer: temp2})
            this.setState({id1: this.state.Interviewee[0]["id"]})
            this.setState({id2: this.state.Interviewer[0]["id"]})
            if (this.props.id !== -1) {
                axios.get('http://localhost:3000/interviews/'+ this.state.id)
                .then(res => {
                   this.setState({id1: res.data.id1})
                   this.setState({id2: res.data.id2})
                   this.setState({st_time: res.data.st_time.substr(0, res.data.st_time.length - 1)})
                   this.setState({en_time: res.data.en_time.substr(0, res.data.en_time.length - 1)})
                   console.log(this.state) 
                })
                console.log("hererer")
            }
            return res;
        });
    }
    onSubmit = (e) => {
        let temp = {
            "id1": this.state.id1,
            "id2": this.state.id2,
            "st_time": this.state.st_time,
            "en_time": this.state.en_time,
        }  
        this.props.addInterview(temp);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} style = {{ display: 'flex' }}>
                    <label> Start time: 
                        <input
                            type = "datetime-local"
                            name = "st_time"
                            value = {this.st_time}
                            onChange = {this.onChange}
                        />
                    </label>
                    <label> End time: 
                        <input
                            type = "datetime-local"
                            name = "en_time"
                            value = {this.en_time}
                            onChange = {this.onChange}
                        />
                    </label>
                    <label>
                        Choose Interviewee:
                        <select value={this.state.id1} onChange={this.onChange}>
                            {
                                this.state.Interviewee.map((option) =>
                                    <option key = {option.id} value = {option.id}> {option.label} </option>
                                
                                )
                            }
                        </select>
                    </label>
                    <label>
                        Choose Interviewer:
                        <select value={this.state.id1} onChange={this.onChange}>
                            {
                                this.state.Interviewer.map((option) =>
                                    <option key = {option.id} value = {option.id}> {option.label} </option>
                                
                                )
                            }
                        </select>
                    </label>
                    <input
                        type = "button"
                        name = "Submit"
                        onClick = {this.onSubmit}
                    />
                </form>
            </div>
        )
    }
}

export default InterviewForm
