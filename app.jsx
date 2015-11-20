"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

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
						<a className="navbar-brand" href="#">React Flux Example</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#home">Home <span className="sr-only">(current)</span></a></li>
							<li><a href="#about">About</a></li>
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
					<h1>Getting started with React and Flux</h1>
					<p>This is a very basic example how to create multilingual React website using Flux. You can take this code as a base
						and build on it, replacing current content retrieval from JSON with calls to APIs, extending functionality, etc.</p>
					<p><a className="btn btn-primary btn-lg" href="#" role="button">Go up</a></p>
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
					<h1>About the solution</h1>
					<p>In this solution I have been using these libraries/tools:</p>
					<ul>
						<li>React</li>
						<li>Flux</li>
						<li>Bootstrap</li>
						<li>Mocha</li>
						<li>ES2015</li>
						<li>Gulp</li>
						<li>Babel</li>
						<li>VSCode</li>
					</ul>
					<p>This Website is created using React version 1.14. Using Flux as a pattern for dealing with changes. This solution is
						left as clean as possible, just using pure Bootstrap, no styling, no addition JavaScript. Tests are written in Mocha,
						using Chai as assertion library and Sinon as a mocking/spying/faking helper. There it is beneficial - ES2015 syntax
						is being used. Gulp is used for task automation. React code is being transpiled using Babel version 6, Babel is used
						for ES2015 code transformation as well. For these two transformations Babel presets are being used.</p>
					<p><a className="btn btn-primary btn-lg" href="#" role="button">Go up</a></p>
				</div>
			</div>
    );
  }
});

let Page = React.createClass ({
  render() {
    return (
			<div>
				<Menu />
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<Home />
							<About />
						</div>
					</div>
				</div>
			</div>
    );
  }
});

ReactDOM.render(<Page />, document.getElementById('page'));