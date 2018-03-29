import React, { Component } from 'react';
class HeaderRefresh extends Component {
  render() {
    return (
    	<div>
    		<ul className="nav navbar-nav refresh">
               <li className="divided">
                 <a href="#" className="page-refresh"><i className="fa fa-refresh"></i></a>
               </li>
            </ul>
    	</div>
    );
  }
}

export default HeaderRefresh;
