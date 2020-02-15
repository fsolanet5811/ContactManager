import React from 'react';
import './Login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {login} from "../../api.js"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            username: "",
            password: "",
            userLoggedIn = false
        }
    }

        async loginClick(){
            if (!this.state.username || !this.state.password) {
                //
            }

            //encrypt password in new variable
            //encryptedPassword

            var loginResult = await login({ Username: this.state.username, Password: /* encryptedPassword*/});

            //if everything works, no error returned

            //if login success login result = user, set context.loggedInUser = loginResult

            this.state.userLoggedIn = true;

            this.setState(this.state);

        }

        usernameChange(e){
            this.state.username = e.target.value;
            this.setState(this.state);
        }

        passwordChange(e){
            this.state.password = e.target.value;
            this.setState(this.state);
        }

    render() {
            //if flag true userLoggedIn = false; and redirect
        return (

            
            <div className="App">
            
            <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>

            <h1>KEYSTONE CONTACT</h1>

            <b>Log In</b>

                <div className="input">
                    <input type="text" placeholder="Username" vaule={this.state.username} onChange={this.usernameChange.bind(this)} />
            </div>

            <div className="input">
                    <input type="password" placeholder="Password" vaule={this.state.pasword} onChange={this.passwordChange.bind(this)}/>
            </div>

            <button className="button" onClick= {}>Log In</button>
            <Link to="/Signup/"><button className = "button2" >Don't have an account? Sign Up</button></Link>
          
           <div class = "fixed">
           <img src="https://i.ibb.co/QJdHJ5N/citybottomimagewstars.png" alt="city"></img>
          </div>
          
           </div>
         
            )


    }
  }

    
export default Login;
