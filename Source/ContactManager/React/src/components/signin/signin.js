import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                Sign In Page!
                <Link to="/home/">To Home Page</Link>
            </div>
        )
    }
}

export default SignIn;