import React, { Component } from 'react';

class Card extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
  	let size = 0
  	const list = this.props.list
  	list.map((v)=>{size= size + v.ec2})
  	const maxSize = this.props.size[this.props.env+"_ec2_max"]
  	const percentage = ((size/maxSize)*100).toFixed(0)
  	const color = this.props.color
    return (
    	   <div className="card-container col-lg-4 col-sm-6 col-sm-12">
			<div className={`card ${color} hover`}>
			
              <div className="front"> 

                <div className="media">        
                  <span className="pull-left">
                    <i className="fa fa-desktop media-object"></i>
                  </span>

                  <div className="media-body">
                    <small>{this.props.envName}</small>
                    <h2 className="media-heading">{size}</h2>
                  </div>
                </div> 

                <div className="progress-list">
                  <div className="details">
                    <div className="title">This month plan %</div>
                  </div>
                  <div className="status pull-right bg-transparent-black-1">
                    <span className="animate-number">{percentage}</span>%
                  </div>
                  <div className="clearfix"></div>
                  <div className="progress progress-little progress-transparent-black">
                    <div className="progress-bar" style={{width:percentage+'%'}}></div>
                  </div>
                </div>
              </div>
            </div>
           </div> 
    );
  }
}

export default Card;
