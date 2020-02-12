import React from "react"
import searchContacts from "../../../api.js"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchCriteria: {
                searchType: 'Name',
                searchText: ''
            }
        }

    }

    updateInputValue(e) {

        this.state.inputValue = e.target.value

    }

    async ifEnter(e) {
            if (e.key === 'Enter') {
                if (this.state.inputValue != '') {
                    this.state.searchCriteria.searchText = this.state.inputValue
                    let contacts = await searchContacts(this.props.userId, this.state.searchCriteria)
                    this.props.getContact(contacts);
                }
            }
    }

    render() {


        return (
            <input className="SearchBar" type="text" placeholder="Search" onChange={e => this.updateInputValue(e)} onKeyDown={e => this.ifEnter(e)} />
        )
    }
}

export default SearchBar