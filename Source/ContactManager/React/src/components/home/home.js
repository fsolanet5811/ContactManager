import React, { Component } from 'react';
import SideBar from './sidebar/sidebar.js';
import Content from './content/content.js';
import Edit from './content/edit/edit.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }

    render() {
        return (
            <div>
                <SideBar context={this.state.context}/>
                <Content context={this.state.context}/>
            </div>
        )
    }
}

export default Home;
