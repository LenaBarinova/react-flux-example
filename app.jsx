"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let api = require('./api');
let actions = require('./actions');
let store = require('./store');

actions.initApp();

let Menu = React.createClass ({

  switchLanguage(key, event) {
    actions.switchLanguage(key);
  },

  render() {
    return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Flux</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#home">{this.props.data.home} <span className="sr-only">(current)</span></a></li>
              <li><a href="#about">{this.props.data.about}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'en')}>EN</a></li>
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'lt')}>LT</a></li>
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'ru')}>RU</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

let Home = React.createClass ({
  render() {
    return (
      <div className="jumbotron" id="home">
        <div className="container">
          <h1>{this.props.data.header}</h1>
          <p>{this.props.data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

let About = React.createClass ({
  render() {
    return (
      <div className="jumbotron" id="about">
        <div className="container">
          <h1>{this.props.data.header}</h1>
          <p> {this.props.data.text} </p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

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

ReactDOM.render(<Page />, document.getElementById('page'));