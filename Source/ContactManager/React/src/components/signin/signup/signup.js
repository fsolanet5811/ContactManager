import React from 'react';
import '../login/login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }
        render() {
            return (

                <div className="App">

                    <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>


                    <h1>KEYSTONE CONTACT</h1>
                    <b>Sign Up</b>

                    <div className="input">
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="input">
                        <input type="password" placeholder="Password" />
                    </div>

                    <Link to="/"><button className="button">Submit</button></Link>
                    <Link to="/"><button className="button2">Have an Account? Log In </button></Link>

                    <div class="fixed">
                        <img src="/React/images/citybottomimagewstars.png" alt="city"></img>
                    </div>

                </div>
            )
        }
    }


    export default Signup;