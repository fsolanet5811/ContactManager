import React, { Component } from 'react'
import { hot } from 'react-hot-loader';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="Text">
                Contact Manager
            </div>    

            )

    }
}

export default hot(module)(Header);