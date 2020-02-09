import React from "react"
import "./ContactPageApp.css"

class ContactPageLink extends React.Component {

    render() {
        return (
            <span>
                <a className="Link" href="#">{this.props.linkText}</a>
            </span>
        )
    }


}

export default ContactPageLink