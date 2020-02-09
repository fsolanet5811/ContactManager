import React from "react"
import Contact from "../src/components/content/contact/contact.js"

class MyTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visability: false, deletedId, contactsLength }
    }

    deletedContact(deletedId) {
        this.state.deletedId = deletedId
    }

    numOfRows() {
        this.state.contactsLength = this.state.contacts.length
    }

    render() {
        return (
            <table>
                {
                    this.props.contacts.map((contact) => <Contact contact={contact}/>)
                }
            </table>
        )
    }
}

export default MyTable