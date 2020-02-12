import React from 'react';
//import ReactDOM from 'react-dom';
import './signin.css';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: "login"
    }
  }

  changeView (view) {
    this.setState({
      currentView: view
    })
  }

  currentView () {
    switch(this.state.currentView) {
      case "login":
        return (
            <div className="App">
            
            <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>

            <h1>KEYSTONE CONTACT</h1>

            <b>Log In</b>

            <div className="input">
              <input type="text" placeholder="Username"/>
            </div>

            <div className="input">
              <input type="text" placeholder="Password"/>
            </div>
            <Link to="/home/">To Home Page</Link>
            <button className="button">Log In</button>
            <button className = "button2" onClick={ () => this.changeView("signUp")}>Don't have an account? Sign Up</button>
          
            <div className = "fixed">
           <img src="https://i.ibb.co/QJdHJ5N/citybottomimagewstars.png" alt="city"></img>
          </div>
          
           </div>
         
        )

      case "signUp":
        return (
          
            <div className="App2">
            
            <img src="https://i.ibb.co/h1c6mv7/logofinal1.png" alt="logo" width="120" height="120"></img>


            <h1>KEYSTONE CONTACT</h1>
            <b>Sign Up</b>
            

            

            <div className="input">
              <input type="text" placeholder="Username"/>
            </div>

            <div className="input">
              <input type="text" placeholder="Password"/>
            </div>

            <div className="input">
                <input type="text" placeholder="Name" />
            </div>

            <button className = "button">Submit</button>
            <button className = "button2" onClick={ () => this.changeView("login")}>Have an Account? Log In</button>
            
            <div className = "fixed">
             <img src="https://i.ibb.co/QJdHJ5N/citybottomimagewstars.png" alt="city"></img>
            </div>
            
            </div>

        )

        

      default:
        break
    }
  }


  render() {
    return (
      <section id="login">{
        this.currentView()
      }</section>
    )
  }
  
}

export default SignIn;

//ReactDOM.render(<Login/>, document.getElementById("root"))
