'use strict';

var React = require('react');

var Form = require('./children/Form');
var Results = require('./children/Result');
var Saved = require('./children/Saved');

var helpers = require('./utils/helpers');

var Main = React.createClass({
	getInitialState: function () {
		return { topic: "", startYear: "", endYear: "", results: [], savedArticles: [] }
	},
	componentDidMount: function () {
		helpers.getSavedArticles().then(function (response) {
			console.log(response);
			// this.setState({ savedArticles: response.data });
		}.bind(this));
	},
	componenetDidUpdate: function () {
		console.log("updated");
	},
	setTerm: function (term) {
		this.setState({ topic: term.topic, startYear: term.startYear, endYear: term.endYear });
		// this.state.topic = term.topic;
		// this.state.startYear = term.startYear;
		// this.state.endYear = term.endYear;
		helpers.runQuery(this.state).then(function (data) {
			if (data !== this.state.results) {
				// this.state.results = data.data;
				this.setState({ results: data.data });
				console.log("Results", this.state.results);
			}
		}.bind(this));
		console.log("From Main.setTerm");
		console.log(term);
		console.log(this.state);
	},
	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>

					<div className="col-md-6">
						<div className="jumbotron">
							<h1>New York Times Article Scrubber</h1>
							<p><em>Search for and annotate articles of interest!</em></p>
						</div>
					</div>

					<div className="col-md-3"></div>
				</div>

				{/* Search Form */}
				<div className="row">
					<div className="col-md-3"></div>

					<div className="col-md-6">
						<Form setTerm={this.setTerm} handleSubmit={this.state.handleSubmit} />
					</div>

					<div className="col-md-3"></div>
				</div>

				<div className="row">
					<div className="col-md-3"></div>

					<div className="col-md-6">
						<Results results={this.state.results} />
					</div>
				</div>


			</div>
		);
	}
});


module.exports = Main;


// {/* Search Results */ }
// <div className="row">
//     <div className="col-md-3"></div>

//     <div className="col-md-6">
//         <Results results={this.state.results} />
//     </div>

//     <div className="col-md-3"></div>
// </div>

// {/* Saved Articles */ }
// <div className="row">
//     <div className="col-md-3"></div>

//     <div className="col-md-6">
//         <Saved savedArticles={this.state.savedArticles} />
//     </div>

//     <div className="col-md-3"></div>
// </div>