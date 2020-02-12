import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Edit from './edit/edit.js';
import Manage from './manage/manage.js';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }

    render() {
        return (
            <div className="Content">
                <Route path="/home/edit/" render={() => <Edit contactId={this.state.context.editContactId}/>}/>
                <Route exact path="/home/" render={() => <Manage context={this.state.context}/>}/>
            </div>
        );
    }
}

export default Content;