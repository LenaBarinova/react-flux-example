"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let store = require('../store');

let Menu = require('./menu');
let Home = require('./home');
let About = require('./about');

let Page = React.createClass ({

  getInitialState() {
    return {
       content: store.getContent()
    };
  },

  componentWillMount() {
    store.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ content: store.getContent() });
  },

  render() {
    return (
      <div>
        <Menu data={this.state.content.page.menu}/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Home data={this.state.content.page.home}/>
              <About data={this.state.content.page.about}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Page;
