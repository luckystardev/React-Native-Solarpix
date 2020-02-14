import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SignIn from './components/pages/SignIn';
import JobList from './components/pages/JobList';
import NewJob from './components/pages/NewJob';
import CategoryList from './components/pages/CategoryList';
import PhotoUpload from './components/pages/PhotoUpload';

export default class App extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="signin"
	          component={SignIn}
	          animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="joblist"
	          component={JobList}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="newJob"
	          component={NewJob}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="categoryList"
	          component={CategoryList}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="photoUpload"
	          component={PhotoUpload}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}