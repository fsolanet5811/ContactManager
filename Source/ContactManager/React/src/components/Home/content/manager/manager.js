import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './manager.css'
import { searchContacts } from '../../../../api.js'
import { Redirect } from 'react-router-dom';
import Contact from '../contact/contact.js';

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            searchCriteria: {
                searchType: 'Name',
                searchText: props.search
            },
            showContactPage: false,
            searched: props.searched
        };

        if(props.searched) {
            searchContacts(1, this.state.searchCriteria).then(
                (contacts) => {
                    this.state.contacts = contacts;
                    this.setState(this.state);
                }
            );
        }
    }

    render() {
        if (this.state.showContactPage) {
            this.state.showContactPage = false;
            return <Redirect push to="/contact/"/>
        }

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: top
            }}>
                <table className="Table">
                    <thead>
                        <tr className="HeaderRow">
                            <th className="ContactsHeaderCell">
                                <div className="ContactsLabel">
                                    Contacts
                                </div>
                            </th>
                            <th className="SearchHeaderCell">
                                <div className="ToolsContent">
                                    <input type="text" onChange={this.searchTextChanged.bind(this)} className="TextBox" />
                                    <button onClick={this.searchClick.bind(this)} className="Button">
                                        <img src="/React/images/magnifying_glass.png" alt="Search" className="Image" />
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map((contact) =>
                                <tr className="Row" key={contact.Id}>
                                    <td className="Row">
                                        <Contact contact={contact}/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    searchTextChanged(e) {
        this.state.searchCriteria.searchText = e.target.value;
        this.setState(this.state);
    }

    async searchClick() {
        this.state.contacts = await searchContacts(1, this.state.searchCriteria)
        this.state.searched = true;
        this.setState(this.state);
    }

    editClick(contact) {
        this.props.grabSearch(this.state.searchCriteria.searchText, this.state.searched);
        this.state.showContactPage = true;
        this.setState(this.state);
    }
}

export default hot(module)(Manager);