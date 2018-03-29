import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUrlParms } from '../utils/util'
import BreadCrumbs from '../Component/breadcrumbs'

// @connect(
//   (state) => { return state },
//   { loadDataSyn }
// )
class ApplicationDetail extends Component {
  constructor(props, context) {
    super(props, context)
    const parms = getUrlParms(props)
    this.state = {
      pageParms:parms,
      application:{
        id:"",
        env:"",
        ec2List:[],
        rds:{
          "name":"",
          "ip":"",
          "server":""
        },
        redis:{
          "name":"",
          "ip":"",
          "server":""
        }
      }
    }
  }

  componentDidMount() {
    //console.log(this.props);
  }
  render() {
    return (
        <div className="ApplicationDetail" >
          <h1>ApplicationDetail name</h1>
          <h3>statue: offline</h3>
                <br />
                <br />
        	 <section className="tile color transparent-black col-lg-12 col-sm-12 col-sm-12">
              <div className="tile-body">
                <h5>Mysql :</h5>
                  <table className="table table-datatable table-custom dataTable">
                  <thead>
                    <tr>
                      <th className="sort-alpha sorting_asc">Name</th>
                      <th className="sort-alpha sorting_asc">Ip</th>
                      <th className="sort-alpha sorting_asc">Server</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td>127.0.0.1</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </section>
           <section className="tile color transparent-black col-lg-12 col-sm-12 col-sm-12">
              <div className="tile-body">
                <h5>Redis :</h5>
                  <table className="table table-datatable table-custom dataTable">
                  <thead>
                    <tr>
                      <th className="sort-alpha sorting_asc">Name</th>
                      <th className="sort-alpha sorting_asc">Ip</th>
                      <th className="sort-alpha sorting_asc">Server</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td>127.0.0.1</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </section>
           <section className="tile color transparent-black col-lg-12 col-sm-12 col-sm-12">
              <div className="tile-body">
                <h5>Servers :</h5>
                  <table className="table table-datatable table-custom dataTable">
                  <thead>
                    <tr>
                      <th className="sort-alpha sorting_asc">Id</th>
                      <th className="sort-alpha sorting_asc">inter Ip</th>
                      <th className="sort-alpha sorting_asc">exter Ip</th>
                      <th className="sort-alpha sorting_asc">Setting</th>
                      <th className="sort-alpha sorting_asc">edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>sdjfkslll</td>
                      <td>127.0.0.1</td>
                      <td>127.0.0.1</td>
                      <td>1 cpu / 16 g</td>
                      <td>Delete</td>
                    </tr>
                    <tr>
                      <td>sdjfkslll</td>
                      <td>127.0.0.1</td>
                      <td>127.0.0.1</td>
                      <td>1 cpu / 16 g</td>
                      <td>Delete</td>
                    </tr>
                  </tbody>
                </table>
              </div>

           </section>
        </div> 
    );
  }
}

export default ApplicationDetail;
