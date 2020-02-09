import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPageTitle from "./ContactPageTitle"
import ContactPageLink from "./ContactPageLink"
import MyButton from "./MyButton"
import MySearchBar from "./MySearchBar.js"
import MyTable from "./MyTable"
import "./ContactPageApp.css"

class ContactPageApp extends React.Component {

    render() {
        return (
            <span>
                <ContactPageTitle />
                <div className="Column Left">
                    <ContactPageLink linkText="Home" />
                    <hr></hr>
                    <ContactPageLink linkText="Settings" />
                    <hr></hr>
                    <ContactPageLink linkText="About" />
                    <hr></hr>
                </div>
                <div className="Column Right">
                    <span className="Search"></span><span><MySearchBar /></span><h1 className="RoundButton"><MyButton /></h1>
                    <div className="Table"><MyTable /></div>
                </div>
            </span>
        )
    }


}

export default ContactPageApp