import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiCall from './components/ApiCall/ApiCall';
// import Game from './components/Game/Game';
// import Contact from './components/Contact/Contact'
// import Api from './Api'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(<Contact />, document.getElementById('root'));
ReactDOM.render(<ApiCall />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
