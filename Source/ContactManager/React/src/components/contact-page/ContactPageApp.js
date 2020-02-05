import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPageTitle from "./ContactPageTitle"
import ContactPageLink from "./ContactPageLink"
import MyButton from "./MyButton"
import MySearchBar from "./MySearchBar.js"
import MyTable from "./MyTable"
import "./ContactPageApp.css"

class ContactPageApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {userId, contacts, searchString}
    }

    getContacts(contacts) {
        this.state.contacts = contacts
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
                    <span className="Search"></span><span><MySearchBar returnContacts={this.getContacts.bind(this)} Id={this.state.userID}/></span><h1 className="RoundButton"><MyButton /></h1>
                    <div className="Table"><MyTable contacts={this.state.contacts}/></div>
                </div>
            </span>
        )
    }


}

export default ContactPageApp