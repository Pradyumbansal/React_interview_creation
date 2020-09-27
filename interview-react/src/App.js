import React, { Component } from 'react';
import Interviews from './components/Interviews.js'
import NewInterview from './components/NewInterview.js'
import EditInterview from './components/EditInterview.js'
import Participants from './components/Participants.js'
import NewParticipant from './components/NewParticipant.js'
import EditParticipant from './components/EditParticipant.js'

import { BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component = {Interviews} />
          <Route exact path = "/newInterview" component = {NewInterview} />
          <Route exact path = "/editInterview/:id" component = {EditInterview} />   
          <Route exact path = "/participants" component = {Participants} />
          <Route exact path = "/newParticipant" component = {NewParticipant} />
          <Route exact path = "/editParticipant/:id" component = {EditParticipant} />   
            
         </div>
      </Router>
      
    );
  }
}

export default App;