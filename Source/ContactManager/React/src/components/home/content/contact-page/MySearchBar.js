import React from "react"

class MySearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: '' }

    }

    updateInputValue(e) {

        this.setState({ inputValue: e.target.value })

    }

    ifEnter(e) {
        if (e.key === 'Enter')
            alert(this.state.inputValue)
    }



    render() {


        return (
            <input className="SearchBar" type="text" placeholder="Search" onChange={e => this.updateInputValue(e)} onKeyDown={e => this.ifEnter(e)} />
        )
    }
}

export default MySearchBar