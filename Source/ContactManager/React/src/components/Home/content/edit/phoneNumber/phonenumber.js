import React, { Component } from 'react';
import './phonenumber.css'
import Dropdown from 'react-dropdown'

const options = [
    'home', 'mobile', 'work', 'fax'
]

class PhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:''
        }
        
    }

    selectNum(option) {
        this.setState({selected:option})
    }

    render() {
        const defaultOption = this.state.selected

        //testing, delete later
        const yourSelection = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label


        return (
            <div>
                <Dropdown options={options} onChange={this.selectNum.bind(this)} value={defaultOption} placeholder="Phone Number" />

                //testing, delete later
                <div>
                    Selection: {yourSelection}
                </div>
            </div>              
        );
    }
}

export default PhoneNumber;