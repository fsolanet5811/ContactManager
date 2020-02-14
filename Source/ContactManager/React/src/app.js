import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import SignIn from './components/signin/signin.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: {
                loggedInUser: {
                    Id: 1,
                    Username: "Yeetus"
                },
                editContactId: 0,
                searchText: '',
                searchPerformed: false
            }
        }
    }

    render() {
        return (
            <Router>
                <Route exact path="/" render={() => <SignIn context={this.state.context}/>}/>
                <Route path="/home" render={() => <Home context={this.state.context}/>}/>
            </Router>
        );
    }
}

export default App;