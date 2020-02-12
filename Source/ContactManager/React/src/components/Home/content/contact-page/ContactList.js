import React from "react"
import Contact from "../contact/contact.js"
import "./ContactManager.css"

class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visability: false }
    }

    contactList(props) {

        const contacts = props.contacts
        const List = contacts.map((contact) =>
            <li key={contact.Id} className="ListItem"><Contact contact={contact} deleteFromArray={this.props.deleteFromArray} /></li>)

        return (
            <ul>{List}</ul>
        )
    }

    render() {
        return (
            <div>
                <this.contactList contacts={this.props.contacts} />
            </div>
        )
    }
}

export default ContactList