import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../../../app.js';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactId: props.contactId
        }
    }

    render() {
        return (
            <div className="Edit">
                <h1>Edit Page!</h1>
                <h1>{this.state.contactId}</h1>
                <Link to="/home">To Home Page</Link>
            </div>
        )
    }
}

export default Edit;