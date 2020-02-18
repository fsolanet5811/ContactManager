import React, { Component } from 'react';
import './phonenumber.css'

class PhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneNum: "",
            ext:""
        }
        
    }

    handleChange(e) {
        this.props.phoneNumber.PhoneNumberType = e.target.value;
        this.setState(this.state);
    }

    phoneNumChange(e) {
        this.props.phoneNumber.Number = e.target.value;
        this.setState(this.state);
    }

    phoneExtChange(e) {
        this.props.phoneNumber.Extension = e.target.value;
        this.setState(this.state);
    }

    render() {
 
        return (
            <div>

                <div>
                    <select value={this.props.phoneNumber.PhoneNumberType} onChange={this.handleChange.bind(this)}>
                        <option value={0}>Home</option>
                        <option value={1}>Mobile</option>
                        <option value={2}>Work</option>
                        <option value={3}>Fax</option>
                    </select>
                </div>

                <div className="input">
                    <input type="text" placeholder="Phone Number" value={this.props.phoneNumber.Number} onChange={this.phoneNumChange.bind(this)} />
                </div>

                <div className="input2">
                <input type="text" placeholder="ext." value={this.props.phoneNumber.Extension} onChange={this.phoneExtChange.bind(this)} />
                </div>
               
            </div>
        );
    }
}

export default PhoneNumber;