import React, { Component } from 'react'
import { hot } from 'react-hot-loader';
import './header.css';
import { Link } from 'react-router-dom'; 

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="Text">
                    Contact Manager
                </h1>
                <h1 className="H">
                    <Link to="/" className="Link">Contacts</Link>
                </h1>
                <h1 className="H">
                    <Link to="/about/" className="Link">About</Link>
                </h1>
            </div>
        );

    }
}

export default hot(module)(Header);