import React, { Component } from 'react';
import './phonenumber.css'

class phoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            phoneNum: "",
            ext: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    phoneNumChange(e) {
        this.state.phoneNum = e.target.value;
        this.setState(this.state);
    }

    phoneExtChange(e) {
        this.state.ext = e.target.value;
        this.setState(this.state);
    }

    render() {
        const defaultOption = this.state.selected

        return (
            <div>
                <div className="input">
                    <input type="text" placeholder="Phone Number" value={this.props.PhoneNumber.Number} onChange={this.phoneNumChange.bind(this)} />
                </div>

                <div className="input">
                    <input type="text" placeholder="ext." value={this.props.PhoneNumber.Extension} onChange={this.phoneExtChange.bind(this)} />
                </div>

                <select value={this.state.value} onChange={this.handleChange} value={this.props.phoneNumber.PhoneNumberType}>
                    <option value="Home">Home</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Work">Work</option>
                    <option value="Fax">Fax</option>
                </select>

            </div>
        );
    }
}

export default phoneNumber;