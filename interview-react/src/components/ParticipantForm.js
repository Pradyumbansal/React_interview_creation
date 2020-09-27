import React, { Component } from 'react'
import axios from 'axios';
export class ParticipantForm extends Component {
    state = {
            name: "",
            email: "",
            participanttype: "",
            id: "" , 
            resume: undefined
            // save: ""
        }
    componentDidMount() {
        this.setState({id: this.props.id})
        if (this.props.id !== "-1") {
            axios.get(`http://localhost:3000/participants/`+this.props.id)
            .then(res => {
                this.setState({name: res.data.name})
                this.setState({email: res.data.email})
                this.setState({participanttype: res.data.participanttype})
                console.log(this.state) 
                console.log(res.data)
            })
            console.log("hererer")
        }
    }
    fileAdd = (e) => {
        this.setState({resume: e.target.files})
    }
    onSubmit = (e) => {
        const form = document.getElementById( "formData" );
        const FD = new FormData( form );
        console.log(this.state);
        this.props.addParticipant(FD);
    }
    // onSelect = (val) => {
    //     if (val === 1) {
    //         document.getElementById('file').innerHTML = ""
    //     }
    //     else document.getElementById('file').innerHTML = this.state.save;
    //     this.onChange();
    // }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <form id = "formData"onSubmit = {this.onSubmit} style = {{ display: 'flex' }}>
                    <label> Name: 
                        <input
                            type = "text"
                            name = "name"
                            value = {this.state.name}
                            onChange = {this.onChange}
                        />
                    </label>
                    <label> Email: 
                        <input
                            type = "text"
                            name = "email"
                            value = {this.state.email}
                            onChange = {this.onChange}
                        />
                    </label>
                    <label>
                        Choose participanttype:
                        <input type="radio" value="Interviewee" name="participanttype" onClick = {this.onChange} /> Interviewee
                        <input type="radio" value="Interviewer" name="participanttype" onClick = {this.onChange} /> Interviewer
                    </label>
                    <label>
                        Resume:
                        <div id = 'file'>
                            <input type="file" name="resume" onChange={this.fileAdd} />
                        </div>
                        
                    </label>
                    <input
                        type = "button"
                        name = "Submit"
                        value = "submit"
                        onClick = {this.onSubmit}
                    />
                </form>
            </div>
        )
    }
}

export default ParticipantForm
