import React from "react"
import Contact from "../contact/contact.js"
import "./ContactManager.css"

class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: props.contacts
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.contacts.map(contact => <div className="ContactCardHost"><Contact contact={contact}/></div>)
                }
            </div>
        )
    }
}

export default ContactList