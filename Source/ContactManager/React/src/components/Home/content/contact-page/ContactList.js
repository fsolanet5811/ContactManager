import React from "react"
import Contact from "../contact/contact.js"
import "./ContactManager.css"

class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            context: props.context,
            contacts: props.contacts
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.contacts.map(contact => <div key={contact.Id} className="ContactCardHost"><Contact contact={contact} context={this.state.context}/></div>)
                }
            </div>
        )
    }
}

export default ContactList