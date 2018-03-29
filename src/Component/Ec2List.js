import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Ec2List extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
         <section className="tile color transparent-black col-lg-12 col-sm-12 col-sm-12">
	          <div className="tile-header">
	            <h1><strong>{this.props.title}</strong></h1>
	            <div className="search">
	              <input type="text" placeholder="Search..." />
	            </div>
	            <div className="controls">
	              <a href="#" className="refresh"><i className="fa fa-refresh"></i></a>
	            </div>
	          </div>
	          <div className="tile-body no-vpadding">
	            <div className="table-responsive">
	              <table className="table table-custom table-sortable nomargin">
	                <thead>
	                  <tr>
	                    <th className="">ID</th>
	                    <th className="">Project</th>
	                    <th className="sortable">create date</th>
	                    <th className="sortable">public date</th>
	                    <th className="sortable">offline date</th>
	                    <th className="">Status</th>
	                    <th className="text-center">ec2 number</th>
	                    <th className="text-center">Detail</th>
	                  </tr>
	                </thead>
	                <tbody>
	                {
			          this.props.list.map(function(item){
			            return (
			            	<tr key={item.id}>
			                    <td>{item.id}</td>
			                    <td>{item.name}</td>
			                    <td className="date">{item.createDate}</td>
									<td className="date">{item.publicDate}</td>
									<td className="date">{item.offLineDate}</td>
									<td className="">{item.status==0?"Offline":"Online"}</td>
			                    <td className="text-center number">{item.ec2}</td>
			                    <td className="text-center number"><Link className="delete" to={`/ApplicationDetail?appid=${item.id}`}>Click me</Link></td>
			                  </tr>
			            	)
			          })
        			}
	                  
	                  
	                </tbody>
	              </table>
	            </div>
	          </div>
	          <div className="tile-footer text-center">
	            <ul className="pagination pagination-sm nomargin pagination-custom">
	              <li className="disabled"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
	              <li className="active"><a href="#">1</a></li>
	              <li><a href="#">2</a></li>
	              <li><a href="#">3</a></li>
	              <li><a href="#">4</a></li>
	              <li><a href="#">5</a></li>
	              <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
	            </ul>
	          </div>
	        </section>
    );
  }
}

export default Ec2List;
