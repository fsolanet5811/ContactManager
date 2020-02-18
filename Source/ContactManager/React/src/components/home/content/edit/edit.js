import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../../../app.js';
import DatePicker from 'react-date-picker';
import { addContact, getContact } from '../../../../api.js';
import { updateContact } from '../../../../api.js';
import { Redirect } from 'react-router-dom';
import PhoneNumber from './phoneNumber/phonenumber.js';
import './edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);

        var isNew = props.contactId == 0;
        this.state = {
            isNew: isNew,
            contact: {
                Id: 0,
                FirstName:'',
                LastName:'',
                Address:'',
                Company:'',
                Notes:'',
                Birthday:'',
                PhoneNumbers: [],
                Emails: []
            },
            returnToManagePage: false
        }
        console.log(this.state);
    }

    async componentDidMount() {
        if(!this.state.isNew) {
            this.state.contact = await getContact(this.props.contactId);
            this.setState(this.state);
        }
        console.log("mount method ran");
    }

    buttonSave() {
        if (this.contactId == 0)
            AddContact()
        else
            UpdateContact(this.state.contactId)
    }

    firstNameChanged(e) {
        this.state.contact.FirstName = e.target.value;
        this.setState(this.state);
    }

    lastNameChanged(e) {
        this.state.contact.LastName = e.target.value;
        this.setState(this.state);
    }

    addressChanged(e) {
        this.state.contact.Address = e.target.value;
        this.setState(this.state);
    }

    companyChanged(e) {
        this.state.contact.Company = e.target.value;
        this.setState(this.state);
    }

    birthdayChanged(date) {
        this.state.contact.Birthday = date;
        this.setState(this.state);
    }

    notesChanged(e) {
        this.state.contact.Notes = e.target.value;
        this.setState(this.state);
    }

    cancelClicked() {
        this.state.returnToManagePage = true;
        this.setState(this.state);
    }

    async saveClicked() {
        if(this.state.isNew) {
            await addContact(this.props.loggedInUserId, this.state.contact);
        }
        else {
            await updateContact(this.state.contact.Id, this.state.contact);
        }

        this.state.returnToManagePage = true;
        this.setState(this.state);
    }

    addPhoneNumberClicked() {
        // Add a blank phone number to the list.
        this.state.contact.PhoneNumbers.push({ Id: 0, PhoneNumberType: 0, Number: '', Extension: ''});
        this.setState(this.state);
    }

    removePhoneNumberClicked(phoneNumber) {
        for(var i = 0; i < this.state.contact.PhoneNumbers.length; i++) {
            if(this.state.contact.PhoneNumbers[i] == phoneNumber) {
                this.state.contact.PhoneNumbers.splice(i, 1);
                this.setState(this.state);
                break;
            }
        }
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

    render() {
        if(this.state.returnToManagePage) {
            this.state.returnToManagePage = false;
            return <Redirect push to="/home"/>
        }

        return (
            <div className="Edit">

                <div className="flex-container">
                    <div className="item">

                        <form>

                            <label>

                                <input type="text"

                                    size="35"

                                    placeholder="First Name"

                                    value={this.state.contact.FirstName} 
                                    
                                    onChange={this.firstNameChanged.bind(this)}/>

                                    
                            </label>

                        </form>

                    </div>

                </div>

                <div className="flex-container">
                    <div className="item">

                        <form>

                            <label>

                                <input type="text"

                                    size="35"

                                    placeholder="Last Name"

                                    value={this.state.contact.LastName} 
                                    
                                    onChange={this.lastNameChanged.bind(this)}/>

                            </label>

                        </form>

                    </div>

                </div>



                <p>Phone Number</p>

                <div className="flex-container"></div>
                <img src="/React/images/plus.png" className="Plus" onClick={this.addPhoneNumberClicked.bind(this)}/>
                    {

                        this.state.contact.PhoneNumbers.map((pn) =>

                            <div key={pn.Id}>
                                <PhoneNumber phoneNumber={pn} />
                                <img src="/React/images/redx.png" className="RedX" onClick={this.removePhoneNumberClicked.bind(this, pn)}/>
                            </div>

                        )

                    }




            <div>Email:</div>

              {

            this.state.contact.Emails.map((email) =>

                <div key={email.Id} className="SectionInfo">

                    <div>

                        {this.getEmailTypeString(email.EmailType)}

                    </div>

                    <div className="SectionContent">

                        {email.Address}

                    </div>

                </div>

            )

        }



        <p></p>

            <div className="flex-container">

                <div className="item">Birthday</div>

                <div className="item">

                    <DatePicker

                        onChange={this.birthdayChanged.bind(this)}

                        value={this.state.contact.Birthday != "" ? new Date(this.state.contact.Birthday.toString()) : null}

                    />

                </div>

            </div>



            <div className="flex-container">

                <div className="item">

                    <form>

                        <label>

                            <input type="text"

                                size="35"

                                value={this.state.contact.Address}

                                placeholder="Address" 
                                
                                onChange={this.addressChanged.bind(this)}/>

                        </label>

                    </form>

                </div>

            </div>
            <div className="flex-container">

                <div className="item">

                    <form>

                        <label>

                        <input type="text"

                            size="35"

                            comp='company'

                            placeholder="Company"

                            value={this.state.contact.Company} 
                            
                            onChange={this.companyChanged.bind(this)}/>

                        </label>

                    </form>

                </div>

            </div>



            <div className="flex-container">

                <div className="item">Notes</div>

                <div className="item">

                    <form>

                        <label>

                        <input type="text"

                            size="35"

                            placeholder="Notes"

                            value={this.state.contact.Notes} 
                            
                            onChange={this.notesChanged.bind(this)}/>

                        </label>

                    </form>

                </div>

            </div>



            <button onClick={this.saveClicked.bind(this)} className="savebutton">Save</button>

            <button onClick={this.cancelClicked.bind(this)} className="cancelbutton">Cancel</button>

            </div >
        )
    }
}

export default Edit;