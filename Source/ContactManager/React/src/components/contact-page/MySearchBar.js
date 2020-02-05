import React from "react"
import searchContacts from "../../api.js"

class MySearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: '', contacts, userID = this.props.Id}

    }

    updateInputValue(e) {

        this.setState({ inputValue: e.target.value })

    }

    ifEnter(e) {
        if (e.key === 'Enter') { 
            this.state.contacts = searchContacts(this.state.userID, this.state.inputValue)
            this.props.getContacts(this.state.contacts)
            this.setState()
        }
    }




    render() {


        return (
            <input className="SearchBar" type="text" placeholder="Search" onChange={e => this.updateInputValue(e)} onKeyDown={e => this.ifEnter(e)} />
        )
    }
}

export default MySearchBar