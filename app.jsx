"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let Api = require('./api');

let Menu = React.createClass ({
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
              <li><a href="#" data-target="#">EN</a></li>
              <li><a href="#" data-target="#">LT</a></li>
              <li><a href="#" data-target="#">RU</a></li>
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
          <p>{this.props.data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

let Page = React.createClass ({

  render() {

    let content = Api.getContent().page;

    return (
      <div>
        <Menu data={content.menu}/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Home data={content.home}/>
              <About data={content.about}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Page />, document.getElementById('page'));