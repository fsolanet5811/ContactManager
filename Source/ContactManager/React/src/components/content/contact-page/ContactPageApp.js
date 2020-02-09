import React from "react"
import ContactPageTitle from "./ContactPageTitle"
import ContactPageLink from "./ContactPageLink"
import MySearchBar from "./MySearchBar.js"
import MyTable from "./MyTable"
import "./ContactPageApp.css"
import searchContacts from "../../../api.js"

class ContactPageApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: 1, contacts: [],

            searchCriteria: {
                searchType: 'Name',
                searchText: ''
            },

            hardCodedContacts: [
                {
                    Id: 1,
                    FullName: "Robert Forristall",
                    visible: false,
                    PhoneNumbers: [
                        {
                            Id: 1,
                            PhoneNumberType: 1,
                            Number: 3057754060,
                            Extension: 123,
                        }
                    ],
                    Emails: [
                        {
                            Id: 1,
                            EmailType: 1,
                            Address: "keysboy20135@yahoo.com"
                        }
                    ],

                    Company: "Bayside Plumbing",
                    Address: "26 Dolphin Rd, Key Largo, FL",
                    Birthday: "12/04/1995",
                    Notes: "I hate having to hard code this stuff lol"

                },
                {
                    Id: 2,
                    FullName: "Robert Forristall",
                    visible: false,
                    PhoneNumbers: [
                        {
                            Id: 1,
                            PhoneNumberType: 2,
                            Number: 3057754060,
                            Extension: 123,
                        }
                    ],
                    Emails: [
                        {
                            Id: 1,
                            EmailType: 2,
                            Address: "keysboy20135@yahoo.com"
                        }
                    ],

                    Company: "Bayside Plumbing",
                    Address: "26 Dolphin Rd, Key Largo, FL",
                    Birthday: "12/04/1995",
                    Notes: "I hate having to hard code this stuff lol"
                },
                {
                    Id: 3,
                    FullName: "Robert Forristall",
                    visible: false,
                    PhoneNumbers: [
                        {
                            Id: 1,
                            PhoneNumberType: 3,
                            Number: 3057754060,
                            Extension: 123,
                        }
                    ],
                    Emails: [
                        {
                            Id: 1,
                            EmailType: 3,
                            Address: "keysboy20135@yahoo.com"
                        }
                    ],

                    Company: "Bayside Plumbing",
                    Address: "26 Dolphin Rd, Key Largo, FL",
                    Birthday: "12/04/1995",
                    Notes: "I hate having to hard code this stuff lol"
                },
                {
                    Id: 4,
                    FullName: "Robert Forristall",
                    visible: false,
                    PhoneNumbers: [
                        {
                            Id: 1,
                            PhoneNumberType: 1,
                            Number: 3057754060,
                            Extension: 123,
                        }
                    ],
                    Emails: [
                        {
                            Id: 1,
                            EmailType: 1,
                            Address: "keysboy20135@yahoo.com"
                        }
                    ],

                    Company: "Bayside Plumbing",
                    Address: "26 Dolphin Rd, Key Largo, FL",
                    Birthday: "12/04/1995",
                    Notes: "I hate having to hard code this stuff lol"
                }
            ]

        }
    }

    async getContacts(inputValue) {
        this.state.searchCriteria.searchText = inputValue
        this.state.contacts = await searchContacts(this.state.userId, this.state.searchCriteria)
    }

    render() {
        return (
            <span>
                <ContactPageTitle />
                <div className="Column Left">
                    <ContactPageLink linkText="Home" />
                    <hr></hr>
                    <ContactPageLink linkText="Settings" />
                    <hr></hr>
                    <ContactPageLink linkText="About" />
                    <hr></hr>
                </div>
                <div className="Column Right">
                    <span className="Search"></span><span><MySearchBar userId={this.state.userId} getContacts={this.getContacts} /></span>
                    <div className="Table"><MyTable contacts={this.state.hardCodedContacts} /></div>
                </div>
            </span>
        )
    }


}

export default ContactPageApp