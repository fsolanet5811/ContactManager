import React, { Component } from 'react';
import './phonenumber.css'
import Dropdown from 'react-dropdown'

const options = [
    'Home', 'Mobile', 'Work', 'Fax'
]

class phoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            phoneNum: "",
            ext:""
        }
        
    }

    selectNum(option) {
        this.setState({selected:option})
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

                <div>
                    <Dropdown options={options} onChange={this.selectNum.bind(this)} value={this.props.PhoneNumber.PhoneNumberType} placeholder="Phone Number" />
                </div>
            </div>
        );
    }
}

export default phoneNumber;