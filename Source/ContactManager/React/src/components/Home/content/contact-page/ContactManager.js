import React from "react"
import SearchBar from "./SearchBar.js"
import ContactList from "./ConatctList.js"
import "./ContactManager.css"
import { Route, useParams } from "react-router-dom"
import searchContacts from "../../../api.js"

class ContactManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: props.context.Id, contacts: [],
            searchCriteria: {
                searchType: 'Name',
                searchText: ''
            }
        }
    }

    async getContacts(inputValue) {
        this.state.searchCriteria.searchText = inputValue
        this.state.contacts = await searchContacts(this.state.userId, this.state.searchCriteria)
        this.setState(this.state)
    }

    deleteFromArray(id) {

        i = 0
        for (i; i != this.state.contacts[i].Id; i++) {

        }

        this.state.contacts.splice(i, 1)
        this.setState(this.state)

    }

    editFromArray(contact) {
        i = 0
        for (i; contact.Id != this.state.contacts[i].Id; i++) {

        }
        this.state.contacts[i] = contact
        this.setState(this.state)
    }

    render() {
        return (
            <span>
                <div className="Column Right">
                    <span><SearchBar userId={this.state.userId} getContacts={this.getContacts} /></span>
                    <div className="Table"><ContactList contacts={this.state.contacts} deleteFromArray={this.deleteFromArray} /></div>
                </div>
            </span>
        )
    }


}

export default ContactManager