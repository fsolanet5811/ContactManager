import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './login/login.js';
import SignUp from './signup/signup.js';

class SignIn extends Component {
    constructor(props) {
		super(props);
		this.state = {
			context: props.context
		}
	}

	render() {
		return (
			<div>
				<Route exact path="/" render={() => <Login context={this.state.context}/>}/>
				<Route path="/signup" render={() => <SignUp context={this.state.context}/>}/>
			</div>
		)
	}
}

export default SignIn;