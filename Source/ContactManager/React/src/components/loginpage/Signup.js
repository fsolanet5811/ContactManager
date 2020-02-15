import React from 'react';
import './Login.css';
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
            context: props.context,
            username: "",
            password: "",
            userSignedUp = false
        }
    }


        async signupClick(){
            if (!this.state.username || !this.state.password) {
                //
            }

            var passwordHash = require('password-hash');

            var hashedPassword = passwordHash.generate(this.state.password);

            var signupResult = await signup({ Username: this.state.username, Password: hashedPassword });



            //if everything works, no error returned

            //if login success login result = user, set context.loggedInUser = loginResult

            this.state.userLoggedIn = true;

            this.setState(this.state);

        } // end loginCLick()


        usernameChange(e){
            this.state.username = e.target.value;
            this.setState(this.state);
        }

        passwordChange(e){
            this.state.password = e.target.value;
            this.setState(this.state);
        }

        render() {
            return (

                <div className="App">

                    <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>


                    <h1>KEYSTONE CONTACT</h1>
                    <b>Sign Up</b>

                    <div className="input">
                        <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChange.bind(this)} />
                    </div>

                    <div className="input">
                        <input type="password" placeholder="Password" value={this.state.pasword} onChange={this.passwordChange.bind(this)}/>
                    </div>

                    <Link to="/Login/"><button className="button">Submit</button></Link>
                    <Link to="/Login/"><button className="button2" onClick={}> Have an Account? Log In </button></Link>

                    <div class="fixed">
                        <img src="https://i.ibb.co/QJdHJ5N/citybottomimagewstars.png" alt="city"></img>
                    </div>

                </div>
            )
        }
    }



export default Signup;
