import React from 'react';
import './login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { login } from "../../../api.js"
import bcrypt from "bcryptjs";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            username: "",
            password: "",
            userLoggedIn: false,
            usernameError: "",
            passwordError: "",
            loginError: ""
        }
    }

    async loginClick() {

        //validate
        if (this.validate()) {
            console.log(this.state)
            this.setState(this.state);
        }
        

        //hash password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(this.state.password, "$2a$10$qppakSpfoH/ojZL3btRRwe");

        console.log(hash);

        var loginResult = await login({ Username: this.state.username, Password: hash });

   

        if (loginResult.Id == null) {
            this.state.loginError = "not logged in";
        }
        else {
            this.state.userLoggedIn = true;
            this.state.context.loggedInUser = loginResult;
        }

        
        //this.state.userLoggedIn = true;

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

    //validation
    validate() {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username) {
            usernameError = "username required";
        }
        if (!this.state.password) {
            passwordError = "password required";
        }

        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError });
            return false;
        }

        return true;
    }
    
    async onKeyDown(e) {
        if(e.key == 'Enter') {
            await this.loginClick();
        }
    }

    render() {
        //if flag true userLoggedIn = false; and redirect
        if(this.state.userLoggedIn) {
            this.state.userLoggedIn = false;
            return <Redirect to="/home"/>
        }

        return (
            <div className="App">

                <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>

                <h1>KEYSTONE CONTACT</h1>
                
                <b>Log In</b>

                <div className="errMessage">{this.state.loginError}</div>

                <div className="input">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/>
                </div>
                <div className="errMessage">{this.state.usernameError}</div>

                <div className="input">
                    <input type="password" placeholder="Password" value={this.state.pasword} onChange={this.passwordChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/>
                </div>
                <div className="errMessage">{this.state.passwordError}</div>


                <button type="submit" className="button" onClick={this.loginClick.bind(this)}>Log In</button>
                <Link to="/signup"><button className="button2" >Don't have an account? Sign Up</button></Link>

                <div className="fixed">
                    <img src="/React/images/citybottomimagewstars.png" alt="city"></img>
                </div>

            </div>

        )


    }
}


export default Login;