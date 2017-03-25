'use strict';

var React = require('react');

var Form = React.createClass({
	getInitialState: function () {
		return { topic: "", startYear: "", endYear: "" };
	},
	handleChange: function (event) {
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
		// console.log(this.state);
		// this.setState({ term: event.target.value });
	},
	handleSubmit: function (event) {
		event.preventDefault();

		this.props.setTerm(this.state);
		// this.setState({ term });
	},
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel panel-header">
					<h3><strong>Search</strong></h3>
				</div>
				<div className="panel panel-body">
					<form onSubmit={this.handleSubmit}>
						<label>Topic</label>
						<input type="text" className="form-control text-center" id="topic" value={this.state.topic} onChange={this.handleChange} required />

						<label>Start Year</label>
						<input type="text" className="form-control text-center" id="startYear" value={this.state.startYear} onChange={this.handleChange} />

						<label>End Year</label>
						<input type="text" className="form-control text-center" id="endYear" value={this.state.endYear} onChange={this.handleChange} />

						<br />
						<button type="submit" className="btn btn-primary" >Search</button>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Form;