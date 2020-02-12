import React from 'react';
//import ReactDOM from 'react-dom';
import './Sidebar.css';
import './animate.min.css';
import './bootstrap.min.css';
import './bootstrap.min.js';
import './bootstrap.min.js';
import './jquery-3.3.1.slim.min.js';
import './popper.min.js';
import './solid.js';

class Sidebar extends React.Component {
    
  render() {
      return (

     <div class="Sidebar">
        <nav id="sidebar">
                  <div class="sidebar-header">

                      <div class="logo"> </div>
                      <div class="smolLogo"> </div>

                      <h3>Contact Manager</h3>
                      <strong>CM</strong>
                  </div>

                  <ul class="list-unstyled components">
                      <li>
                          <form href="#">
                              <i class="fas fa-briefcase"></i>
                              Search
                  </form>
                      </li>
                      <li class="active">
                          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                              <i class="fas fa-home"></i>
                              "All Contacts"
                    </a>
                          <ul class="collapse list-unstyled" id="homeSubmenu">
                              <li>
                                  <a href="#">Contact 1</a>
                              </li>
                              <li>
                                  <a href="#">Contact 2</a>
                              </li>
                              <li>
                                  <a href="#">Contact 3</a>
                              </li>
                          </ul>
                      </li>
                      <a href="#">
                          <i class="fas fa-copy"></i>
                          Favorites
                    </a>
       
                  <div class="fixed">
                      <div class="city"> </div>
                  </div>


            </ul>
        </nav>

              <div id="content">

                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">

                          <button type="button" id="sidebarCollapse" class="btn btn-info">
                              <i class="fas fa-align-left"></i>
                              <span>Toggle Sidebar</span>
                          </button>
                          <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <i class="fas fa-align-justify"></i>
                          </button>

                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="nav navbar-nav ml-auto">
                                  <li class="nav-item active">
                                      <a class="nav-link" href="#">Page</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Page</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Page</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Page</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
                  <table style="object-fit:contain">
                      <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Age</th>
                      </tr>
                      <tr>
                          <td>Name1</td>
                          <td>Lastname 1</td>
                          <td>50</td>
                      </tr>
                      <tr>
                          <td>Name999</td>
                          <td>Lastname999</td>
                          <td>94</td>
                      </tr>
                  </table>
              </div>
              <div id="root"></div>
              <noscript>
                  You need to enable JavaScript to run this app.
</noscript>
              <script src="../../React/dist/bundle.js"></script>
                     <script type="text/javascript">
                              $(document).ready(function () {
                                  $('#sidebarCollapse').on('click', function () {
                                      $('#sidebar').toggleClass('active');
                                  });
          });
    </script>
    </div>
    )

  }

}

export default Sidebar;
//document.getElementById('App'));

//ReactDOM.render(<App/>, document.getElementById("app"))
