import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './manager.css'
import { searchContacts } from '../../../api.js'

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            searchCriteria: {
                searchType: 'Name',
                searchText: ''
            }
        };
    }

    render() {
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
                                        <div className="ContactName">
                                            {contact.FullName}
                                        </div>
                                    </td>
                                    <td className="Row">
                                        <div style={{ float: 'right' }}>
                                            <button onClick={this.editClick.bind(this)} className="Button">
                                                <img src="/React/images/pencil.png" alt="Edit" className="Image" />
                                            </button>
                                            <button className="Button">
                                                <img src="/React/images/redx.png" alt="Delete" className="Image" />
                                            </button>
                                        </div>
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
        this.setState(this.state);
    }

    editClick() {
        this.props.showContactPage();
    }
}

export default hot(module)(Manager);