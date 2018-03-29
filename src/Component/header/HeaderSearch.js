import React, { Component } from 'react';
class HeaderSearch extends Component {
  render() {
    return (
            <div className="search" id="main-search">
              <i className="fa fa-search"></i> <input type="text" placeholder="Search..." />
            </div>
         
    );
  }
}

export default HeaderSearch;
