import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../../../app.js';
import DatePicker from 'react-date-picker';
import { addContact } from '../../../../api.js';
import { updateContact } from '../../../../api.js';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactId: props.contactId,
            firstname: this.state.contact.firstname,
            lastname: this.state.contact.lastname,
            company: this.state.contact.company,
            address: this.state.contact.address,
            birthday: this.state.contact.birthday,
            notes: this.state.contact.notes
        };
    }

    onChange(date) {
        this.setState({ date })
    }


    buttonSave() {
        if (this.contactId == 0)
            AddContact()
        else
            UpdateContact(this.state.contactId)
    }

    buttonCancel() {
    }

    buttonAddPN(pn, Id) {
    }

    buttonAddPN() {
 

    }


    buttonAddEmail(email) {
 
    }


    buttonAddEmail() {

    }

    render() {
        return (
            <div className="Edit">

                <div class="flex-container">

                    <div class="item">First Name</div>

                    <div class="item">

                        <form>

                            <label>

                                <input type="text"

                                    size="35"

                                    placeholder="First Name"

                                    value={this.state.firstname} />

                            </label>

                        </form>

                    </div>

                </div>



                <div class="flex-container">

                    <div class="item">Last Name</div>

                    <div class="item">

                        <form>

                            <label>

                                <input type="text"

                                    size="35"

                                    placeholder="Last Name"

                                    value={this.state.lastname} />

                            </label>

                        </form>

                    </div>

                </div>



                <p>Phone Number</p>

                <div class="flex-container"></div>

                {

                    this.state.contact.PhoneNumbers.map((pn) =>

                        <div key={pn.Id}>

                            <div>

                                {this.getPhoneNumberType(pn.PhoneNumberType)}

                            </div>

                            <div>

                                {pn.Number}

                            </div>

                            {

                                pn.Extension && <div>{'(' + pn.Extension + ')'}</div>

                            }

                        </div>

                    )

                }

                <button onClick={buttonAddPN()}>Add</button>




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

            <div class="flex-container">

                <div class="item">Birthday</div>

                <div class="item">

                    <DatePicker

                        onChange={this.onChange}

                        value={this.state.date}

                        birthday={this.state.date}

                    />

                </div>

            </div>



            <div class="flex-container">

                <div class="item">Address</div>

                <div class="item">

                    <form>

                        <label>

                            <input type="text"

                                size="35"

                            value={this.state.address}

                                placeholder="Address" />

                        </label>

                    </form>

                </div>

            </div>



            <div class="flex-container">

                <div class="item">Company</div>

                <div class="item">

                    <form>

                        <label>

                        <input type="text"

                            size="35"

                            comp='company'

                            placeholder="Company"

                            value={this.state.company} />

                        </label>

                    </form>

                </div>

            </div>



            <div class="flex-container">

                <div class="item">Notes</div>

                <div class="item">

                    <form>

                        <label>

                        <input type="text"

                            size="35"

                            placeholder="Notes"

                            value={this.state.notes} />

                        </label>

                    </form>

                </div>

            </div>



            <button onClick={buttonSave()} class="savebutton">Save</button>

            <button onClick={buttonCancel()} class="cancelbutton">Cancel</button>

            </div >
        )
    }
}

export default Edit;