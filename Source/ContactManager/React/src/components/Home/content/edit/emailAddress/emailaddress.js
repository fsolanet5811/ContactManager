import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import './phonenumber.css'

const options = [
    'Personal', 'Work', 'School'
]

class emailaddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            email: ""
        }
        
    }

    selectEmail(option) {
        this.setState({selected:option})
    }

    emailChange(e) {
        this.state.email = e.target.value;
        this.setState(this.state);
    }

    render() {
        const defaultOption = this.state.selected

        return (
            <div>
                <div className="input">
                    <input type="text" placeholder="Email" value={this.props.email.Address} onChange={this.emailChange.bind(this)}/>
                </div>

                <div>
                <Dropdown options={options} onChange={this.selectEmail.bind(this)} value={this.props.email.EmailTypes} placeholder="Email" />
                </div>
            </div>
        );
    }
}

export default emailaddress;