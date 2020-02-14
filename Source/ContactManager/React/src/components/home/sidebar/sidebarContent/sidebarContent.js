import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './sidebarContent.css'
import { Link } from 'react-router-dom';

const duration = 1000;

const sidebarStyle = {
    transition: 'width 0.2s linear, opacity 0.2s linear'
}

const sidebarTransitionStyles = {
    entering: { width: 0, opacity: 0 },
    entered: { width: '200px', opacity: 1 },
    exiting: { width: '200px', opacity: 1 },
    exited: { width: 0, opacity: 0 }
}

class SideBarContent extends Component {


    render() {
        return (
            <Transition in={this.props.isOpen} timeout={0} enter={false}>
                {(state) => (
                    <div className="SideBarContentHost" style={{
                        ...sidebarStyle,
                        ...sidebarTransitionStyles[state]
                    }}>
                        <div className="ImageHost">
                            <img src="/React/images/sidebarlogo.png" className="Logo"/>
                        </div>
                        <b className="Username">Welcome {this.props.loggedInUser.Username}</b>
                        <div className="Links">
                            <Link to="/home" className="Link">Contacts</Link>
                            <Link to="/" className="Link">Logout</Link>
                        </div>
                </div>
                )}
            </Transition>
            
        );
    }
}

export default SideBarContent;