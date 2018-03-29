import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import NavSwitch from './header/NavSwitch'
import HeaderSearch from './header/HeaderSearch'
import IndexLeftNav from './header/IndexLeftNav'
import HeaderRefresh from './header/HeaderRefresh'
class IndexTopBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  render() {
    return (
        <div className="navbar navbar-default navbar-fixed-top navbar-transparent-black mm-fixed-top" role="navigation" id="navbar">
          <NavSwitch />
          <IndexLeftNav />   
          <div className="navbar-collapse">
             <HeaderRefresh /> 
             <HeaderSearch /> 
          </div> 
        </div> 
    );
  }
}

export default IndexTopBar;
