import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadDataSyn, addDataSyn } from '../store/app/action'
import BreadCrumbs from '../Component/breadcrumbs'
import Card from '../Component/card'
import Ec2List from '../Component/Ec2List'

@connect(
  (state) => { return state },
  { loadDataSyn, addDataSyn }
)
class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.getData = this.getData.bind(this)
    this.showData = this.showData.bind(this)
    this.addData = this.addData.bind(this)
  }

  getData(){
    this.props.loadDataSyn()
  }
  showData(){
    console.log(this.props);
  }

  addData(){
  //  let data = this.props.app.dev
    let obj = {name:"app5",ec2:"55",url:""}
    let env = "dev"
    this.props.addDataSyn(obj,env);

  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const productionList =  this.props.app.prd
    const testList =  this.props.app.test
    const devList =  this.props.app.dev
    const path = this.props.match.url
    const ec2Size = this.props.app.setting.ec2_max

    return (
        <div className="" >
          <BreadCrumbs title="Dashboard" Path={path}/>
          <div className="main">
            <div className="row cards">
                <Card size={ec2Size} env="prd" list={productionList} envName="Production" color="card-redbrown"/>
                <Card size={ec2Size} env="test" list={testList} envName="Test" color="card-greensea"/>
                <Card size={ec2Size} env="dev" list={devList} envName="Dev" color="card-slategray"/>
            </div>
            <div  className="row">
              <Ec2List title="Production" list={productionList} />
            </div>
          </div>



          <button onClick={this.showData}>show data</button>
          <button onClick={this.addData}>update data</button>     
        </div> 
    );
  }
}

export default Dashboard;
