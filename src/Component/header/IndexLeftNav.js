import React, { Component } from 'react';
class IndexLeftNav extends Component {
  render() {
    return (
            <div >
            	<ul className="nav navbar-nav side-nav" id="sidebar">      
		              <li className="collapsed-content"> 
		                <ul>
		                  <li className="search"></li>
		                </ul>
		              </li>

		              <li className="navigation" id="navigation">
		                <a href="#" className="sidebar-toggle" data-toggle="#navigation">Navigation <i className="fa fa-angle-up"></i></a>
		                
		                <ul className="menu">
		                  
		                  <li className="active">
		                    <a href="index.html">
		                      <i className="fa fa-tachometer"></i> Dashboard
		                      <span className="badge badge-red">1</span>
		                    </a>
		                  </li>

		                  <li className="dropdown">
		                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
		                      <i className="fa fa-list"></i> Forms <b className="fa fa-plus dropdown-plus"></b>
		                    </a>
		                    <ul className="dropdown-menu">
		                      <li>
		                        <a href="form-elements.html">
		                          <i className="fa fa-caret-right"></i> Common Elements
		                        </a>
		                      </li>
		                      <li>
		                        <a href="validation-elements.html">
		                          <i className="fa fa-caret-right"></i> Validation
		                        </a>
		                      </li>
		                      <li>
		                        <a href="form-wizard.html">
		                          <i className="fa fa-caret-right"></i> Form Wizard
		                        </a>
		                      </li>
		                    </ul>
		                </li>
		              </ul> 
		            </li> 
           		</ul>
            </div>    
    );
  }
}

export default IndexLeftNav;
