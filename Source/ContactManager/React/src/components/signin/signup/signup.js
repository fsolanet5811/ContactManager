import React from 'react';
import '../login/login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { addUser } from "../../../api.js"
import bcrypt from "bcryptjs";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            username: "",
            password: "",
            passwordConfirm: "",
            userLoggedIn: false,
            usernameError: "",
            passwordError: "",
            passwordConfirmError: "",
            signupError: "",
            signupSuccess:""
        }
    }


    async signupClick() {

        //validate
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(this.state);
        }

        //hash password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(this.state.password, salt);

        console.log(hash);

        var signupResult = await addUser({ Username: this.state.username, Password: hash });

        if (signupResult.id == null) {
            this.state.signupError = "not signed up";
        }
        else {
            this.state.signupSuccess = "signed up!";
        }

        //this.state.userSignedIn = true;

        this.setState(this.state);

    }

    usernameChange(e) {
        this.state.username = e.target.value;
        this.setState(this.state);
    }

    passwordChange(e) {
        this.state.password = e.target.value;
        this.setState(this.state);
    }

    passwordConfirmChange(e) {
        this.state.password = e.target.value;
        this.setState(this.state);
    }

    //validation
    validate() {
        let usernameError = "";
        let passwordError = "";
        let passwordConfirmError = "";

        if (!this.state.username) {
            usernameError = "username required";
        }
        if (!this.state.password) {
            passwordError = "password required";
        }

        const password = this.state.password
        if (password.length < 6 ) {
            passwordError = "password must be longer than 6 characters";
        }

        if (this.state.password != this.state.passwordConfirm) {
            passwordConfirmError = "passwords do not match";
        }

        if (usernameError || passwordError || passwordConfirmError) {
            this.setState({ usernameError, passwordError, passwordConfirmError });
            return false;
        }

        return true;
    }


        render() {
            return (

                <div className="App">

                    <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>


                    <h1>KEYSTONE CONTACT</h1>
                    <b>Sign Up</b>

                    <div className="errMessage">{this.state.signupError}</div>
                    <div className="errMessage">{this.state.signupSuccess}</div>

                    <div className="input" >
                        <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChange.bind(this)}/>
                    </div>
                    <div className="errMessage">{this.state.usernameError}</div>

                    <div className="input">
                        <input type="password" placeholder="Password" value={this.state.pasword} onChange={this.passwordChange.bind(this)} />
                    </div>
                    <div className="errMessage">{this.state.passwordError}</div>

                    <div className="input">
                        <input type="password" placeholder="Confirm Password" value={this.state.paswordConfirm} onChange={this.passwordConfirmChange.bind(this)} />
                    </div>
                    <div className="errMessage">{this.state.passwordConfirmError}</div>

                    <button type= "submit" className="button" onClick={this.signupClick.bind(this)}>Submit</button>
                    <Link to="/"><button className="button2">Have an Account? Log In </button></Link>

                    <div className="fixed">
                        <img src="/React/images/citybottomimagewstars.png" alt="city"></img>
                    </div>

                </div>
            )
        }
    }


    export default Signup;