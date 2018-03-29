import React, { Component } from 'react';
class NavSwitch extends Component {
  render() {
    return (
          <div className="navbar-header col-md-2">
            <a className="navbar-brand" href="index.html">
              <strong>MIN</strong>IMAL
            </a>
            <div className="sidebar-collapse">
              <a href="#">
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
    );
  }
}

export default NavSwitch;
