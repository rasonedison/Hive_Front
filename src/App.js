import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Redirect,Switch } from 'react-router-dom'
import IndexTopBar from './Component/IndexTopBar'
import Dashboard from './container/Dashboard'
import ApplicationDetail from './container/ApplicationDetail'
class App extends Component {
  render() {
    return (
      <div className="App row">
        <IndexTopBar />
        <div id="content" className="col-md-12">
        	<Switch>
				<Route path='/ApplicationDetail' component={ApplicationDetail}></Route>
				<Route component={Dashboard}></Route>
			</Switch>
        </div>
       	
      </div>
    );
  }
}

export default App;
