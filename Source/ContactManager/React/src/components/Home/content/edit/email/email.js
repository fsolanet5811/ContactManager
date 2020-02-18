import React, { Component } from 'react';
import './phonenumber.css'

class email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            email:""
        }

    }

    handleChange(e) {
        this.props.email.EmailType = e.target.value;
        this.setState(this.state);
    }

    emailAddressChange(e) {
        this.props.email.Address = e.target.value;
        this.setState(this.state);
    }


    render() {

        return (
            <div>

                <div>
                    <select value={this.props.email.EmailType} onChange={this.handleChange.bind(this)}>
                        <option value={0}>Personal</option>
                        <option value={1}>Work</option>
                        <option value={2}>School</option>
                    </select>
                </div>

                <div className="input">
                    <input type="text" placeholder="Email Address" value={this.props.email.Address} onChange={this.emailAddressChange.bind(this)} />
                </div>



            </div>
        );
    }
}

export default email;