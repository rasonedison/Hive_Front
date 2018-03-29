import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import reducers from './store/reducer'
import './index.css';
import './css/animate/animate.min.css';
import './css/minimal.css';
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/vendor/animate/animate.min.css">
    // <link type="text/css" rel="stylesheet" media="all" href="assets/js/vendor/mmenu/css/jquery.mmenu.all.css" />
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/rickshaw/css/rickshaw.min.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/morris/css/morris.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/tabdrop/css/tabdrop.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/summernote/css/summernote.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/summernote/css/summernote-bs3.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/chosen/css/chosen.min.css">
    // <link rel="stylesheet" href="%PUBLIC_URL%/assets/js/vendor/chosen/css/chosen-bootstrap.css">

import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    <Provider store={store}>
    	<BrowserRouter>
    		<App></App>
    	</BrowserRouter>
    </Provider>, 
	document.getElementById('wrap')
	);

//registerServiceWorker();
