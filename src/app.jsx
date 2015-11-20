"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let actions = require('./actions');

let Page = require('./components/page');

actions.initApp();

ReactDOM.render(<Page />, document.getElementById('page'));