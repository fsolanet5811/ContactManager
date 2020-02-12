import React from 'react';
//import ReactDOM from 'react-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    
  render() {
    return (

      <div>

        <img src="https://i.ibb.co/8XMh3L0/sidebarlogo.png" alt="sidebarlogo" width="200" height="200"></img>


        <ul className = "button">
          <li>Search</li>
        </ul>

        <ul className = "button">
          <li>All Contacts</li>
        </ul>

        <ul className = "button">
          <li>Favorites</li>
        </ul>

        <ul className = "button">
          <li>Settings</li>
        </ul>

        <img src="https://i.ibb.co/Z2Lw1n5/citybottomimagesidebar.png" alt="city" width="250" height="auto"></img>
        
      </div>

    )

  }

}

export default Sidebar;
//document.getElementById('App'));

//ReactDOM.render(<App/>, document.getElementById("app"))
