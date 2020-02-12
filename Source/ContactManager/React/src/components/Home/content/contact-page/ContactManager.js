import React from "react"
import SearchBar from "./SearchBar.js"
import ContactList from "./ContactList.js"
import "./ContactManager.css"
import { Redirect } from "react-router-dom"
import { getContacts } from "../../../../api.js"

class ContactManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: props.context.loggedInUser.Id,
            contacts: [],
            searchCriteria: {
                searchType: 'Name',
                searchText: ''
            },
            visability: true
            
        }
    }

    async getContacts(inputValue) {
        this.state.searchCriteria.searchText = inputValue
        this.state.contacts = await getContacts(this.state.userId, this.state.searchCriteria)
        console.log(this.state.contacts)
        this.setState(this.state)
    }

    deleteFromArray(id) {

        i = 0
        for (i; i != this.state.contacts[i].Id; i++) {

        }

        //this.state.contacts.splice(i, 1)
        this.setState(this.state)

    }

    editFromArray(contact) {
        i = 0
        for (i; contact.Id != this.state.contacts[i].Id; i++) {

        }
        this.state.contacts[i] = contact
        this.setState(this.state)
    }

    checkForEdit() {
        if (this.props.context.editContactId != 0) {

            i = 0
            for (i; this.state.contacts[i].Id != this.props.context.editContactId; i++) {

            }

            let editContact = this.state.contacts[i];

            //<Redirect to={{
            //    pathname: "/Home/edit/",
            //    state: { id: editContact }
            //}}
            ///>
        }
    }

    render() {
        console.log(this.state.contacts)
        return (
                <div>
                    <div>
                        <SearchBar userId={this.state.userId} getContacts={this.getContacts.bind(this)} />
                    </div>
                    <div className="Table">
                        <ContactList contacts={this.state.contacts}/>
                    </div>
                </div>
        )
    }


}

export default ContactManager