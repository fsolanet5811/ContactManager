import React from "react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }

    }

    updateInputValue(e) {

        this.state.inputValue = e.target.value

    }

    ifEnter(e) {
        if (e.key === 'Enter') {
            if (this.state.inputValue != '') {
                this.props.getContacts(this.state.inputValue)
                this.setState(this.state = { inputValue: '' })
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