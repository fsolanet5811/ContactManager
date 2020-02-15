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

    async ifEnter(e) {
        if (e.key === 'Enter') {
            await this.props.getContacts(this.state.inputValue)
            this.setState(this.state = { inputValue: '' })
        }
    }

    render() {


        return (
            <input type="text" className="SearchBar" placeholder="Search" onChange={e => this.updateInputValue(e)} onKeyDown={e => this.ifEnter(e)} />
        )
    }
}

export default SearchBar