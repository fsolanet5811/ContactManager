import React from "react"
import Contact from "../contact/contact.js"
import "./ContactPageApp.css"

class MyTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visability: false }
    }

    contactList(props) {

        const contacts = props.contacts
        const List = contacts.map((contact) =>
            <li key={contact.Id} className = "ListItem"><Contact contact={contact} /></li>)

        return (
            <ul>{List}</ul>
            )
    }

    render() {
        return (
            <div>
                <this.contactList contacts={this.props.contacts}/>
            </div>
        )
    }
}

export default MyTable