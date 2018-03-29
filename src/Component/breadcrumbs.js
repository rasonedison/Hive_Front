import React, { Component } from 'react';

class BreadCrumbs extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div className="pageheader">
            <h2>
            	<i className="fa fa-tachometer"></i> {this.props.title}
            	<span></span>
            </h2>
            <div className="breadcrumbs">
              <ol className="breadcrumb">
                <li>You are here</li>
                <li><a href="index.html">Home</a></li>
                <li className="active">{this.props.title}</li>
              </ol>
            </div>
        </div>
    );
  }
}

export default BreadCrumbs;
