import React from "react"
import Button from 'react-bootstrap/Button'

class MyButton extends React.Component {
    constructor(props) {
        super(props)
        this.updateDeleteText = this.updateDeleteText.bind(this)
        this.cancelDelete = this.cancelDelete.bind(this)
        this.state = { deleteText: "Delete Contacts", buttonFlag: 0 }
    }

    render(props) {

        let cancelButton = null

        if (this.state.buttonFlag === 1)
            cancelButton = <Button variant="secondary" onClick={e => this.cancelDelete(e)}>Cancel Deletion</Button>

        return (
            <div>
                <Button href="https://google.com" variant="primary">Add Contact</Button>
                <Button variant="Danger" onClick={e => this.updateDeleteText(e)}>
                    {this.state.deleteText}
                </Button>
                {cancelButton}
            </div>
        )
    }

    updateDeleteText(e) {
        if (this.state.buttonFlag === 0)
            this.setState({ deleteText: "Confirm Deletion", buttonFlag: 1 })
    }

    cancelDelete(e) {
        this.setState({ deleteText: "Delete Contacts", buttonFlag: 0 })
    }





}

export default MyButton