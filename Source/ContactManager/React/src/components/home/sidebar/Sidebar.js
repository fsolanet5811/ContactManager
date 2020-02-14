import React, { Component } from 'react';
import './sidebar.css';
import SideBarContent from './sidebarContent/sidebarContent.js';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            isOpen: true
        }
    }

    render() {
        return (
            <div className="SideBarHost">
                <SideBarContent isOpen={this.state.isOpen} loggedInUser={this.state.context.loggedInUser}/>
                <div className="SideBarTogglePanel">
                    <span>
                        <img src="/React/images/hamburger.png" onClick={this.toggleSideBar.bind(this)} className="Hamburger"></img>
                    </span>
                </div>
            </div>
        )
    }

    toggleSideBar() {
        this.state.isOpen = !this.state.isOpen;
        this.setState(this.state);
    }
}
export default SideBar;