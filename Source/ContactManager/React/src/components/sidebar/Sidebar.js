import React from 'react';
//import ReactDOM from 'react-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    
  render() {
    return (

      <div class = "Sidebar">

        <img src="https://i.ibb.co/8XMh3L0/sidebarlogo.png" alt="sidebarlogo" width="200" height="200"></img>


        <ul class = "button">
          <li>Search</li>
        </ul>

        <ul class = "button">
          <li>All Contacts</li>
        </ul>

        <ul class = "button">
          <li>Favorites</li>
        </ul>

        <ul class = "button">
          <li>Settings</li>
        </ul>

        <div class = "fixed">
          <img src="https://i.ibb.co/Z2Lw1n5/citybottomimagesidebar.png" alt="city" width="250" height="auto"></img>
        </div>
        
      </div>

    )

  }

}

export default Sidebar;
//document.getElementById('App'));

//ReactDOM.render(<App/>, document.getElementById("app"))