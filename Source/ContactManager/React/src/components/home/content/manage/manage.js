﻿import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }
    render() {
        return (
            <div>
                Manage page!
                <Link to="/home/edit/">To Edit Page</Link>
            </div>
        )
    }
}

export default Manage;