import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './contactInfo.css';
import { deleteContact } from '../../../../../api.js';
import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const contactInfoStyle = {
    transition: 'max-height 0.3s linear'
}

const contactInfoTransitionStyles = {
    entering: { maxHeight: 0 },
    entered: { maxHeight: '300px' },
    exiting: { maxHeight: '300px' },
    exited: { maxHeight: 0 }
}

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            contact: props.contact,
            editClicked: false
        };
    }

    render() {
        if(this.state.editClicked) {
            this.state.editClicked = false;
            this.state.context.editContactId = this.state.contact.Id;
            return <Redirect push to="/home/contact"/>
        }

        // Dates are annoying, so we have to create a date object from our string and manually pull the day, month, and year to get the string we want.
        var birthday = this.state.contact.Birthday ? new Date(this.state.contact.Birthday) : null;
        var birthdayText = '';
        if(birthday) {
            birthdayText = (birthday.getMonth() + 1) + '/' + (birthday.getDay() + 1) + '/' + birthday.getFullYear();
            // Javascript is literraly dumb and getDate/month return 1 less than the actual date in the object.
        }

        return(
            <Transition in={this.props.isOpen} timeout={0}>
                {(state) => (
                    <div className="InformationCardAnimationHost" style={{
                        ...contactInfoStyle,
                        ...contactInfoTransitionStyles[state]
                    }}>
                        <div className="InformationCard">
                            <table className="ContactInfoTable">
                                <tbody>
                                    <tr>
                                        <td className="TableCell">
                                            <div className="SectionTitle">Phone:</div>
                                            {
                                                this.state.contact.PhoneNumbers.map((pn) => 
                                                    <div key={pn.Id} className="SectionInfo">
                                                        <div className="Type">
                                                            {this.getPhoneNumberTypeString(pn.PhoneNumberType)}
                                                        </div>
                                                        <div className="SectionContent">
                                                            {pn.Number}
                                                        </div>
                                                        {
                                                            pn.Extension && <div className="SectionContent">{'(' + pn.Extension + ')'}</div>
                                                        }
                                                    </div>
                                                )
                                            }
                                        </td>
                                        <td className="TableCell">
                                            <div className="SectionTitle">Company:</div>
                                            <div className="SectionInfo">{this.state.contact.Company}</div>
                                            <div className="SectionTitle">Address:</div>
                                            <div className="SectionInfo">{this.state.contact.Address}</div>
                                            <div className="SectionTitle">Birthday:</div>
                                            <div className="SectionInfo">{birthdayText}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="TableCell">
                                            <div className="SectionTitle">Email:</div>
                                            {
                                                this.state.contact.Emails.map((email) =>
                                                    <div key={email.Id} className="SectionInfo">
                                                        <div className="Type">
                                                            {this.getEmailTypeString(email.EmailType)}
                                                        </div>
                                                        <div className="SectionContent">
                                                            {email.Address}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </td>
                                        <td className="TableCell">
                                            <div className="SectionTitle">Notes:</div>
                                            <div className="SectionInfo">{this.state.contact.Notes}</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div align="right">
                                <button className="ContactButton" onClick={this.editClick.bind(this)}>
                                    <img src="/React/images/pencil.png" alt="Edit" className="Image" />
                                </button>
                                <button className="ContactButton" onClick={this.deleteClick.bind(this)}>
                                    <img src="/React/images/redx.png" alt="Delete" className="Image" />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            </Transition>
        );
    }

    getPhoneNumberTypeString(phoneNumberTypeInt) {
        switch(phoneNumberTypeInt) {
            case 0:
                return 'Home';
            case 1:
                return 'Mobile';
            case 2:
                return 'Work';
            case 3:
                return 'Fax';
            default:
                return 'UNIMPLEMENTED PHONE NUMBER TYPE';
        }
    }

    getEmailTypeString(emailTypeInt) {
        switch(emailTypeInt) {
            case 0:
                return 'Personal';
            case 1:
                return 'Work';
            case 2:
                return 'School';
            default:
                return 'UNIMPLEMENTED EAMIL TYPE';
        }
    }

    deleteClick(e) {
        if(confirm('Are you sure you want to delete ' + this.state.contact.FullName + '?')) {
            deleteContact(this.state.contact.Id);
            this.state.contact.isDeleted = true;
            this.setState(this.state);
            this.props.contactDeleted();
        }
    }

    editClick() {
        this.state.editClicked = true;
        this.setState(this.state);
    }
}

export default ContactInfo;