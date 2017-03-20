'use strict';

var React = require('react');

var Form = React.createClass({
    getInitialState: function () {
        return { topic: "", startYear: "", endYear: "" };
    },
    handleChange: function (event) {
        this.setState({ term: event.target.value });
    },
    handleSubmit: function (event) {
        event.preventDefault();

        this.props.setTerm(this.state.term);
        this.setState({ term });
    },
    render: function () {
        <div className="panel panel-default">
            <div className="panel panel-header">
                <h3><strong>Search</strong></h3>
            </div>
            <div className="panel panel-body">
                <label for="topic">Topic</label>
                <input type="text" className="form-control text-center" name="topic" id="topic" value={this.state.topic} onChange={this.handleChange} required />
                <label for="startYear">Start Year</label>
                <input type="text" className="form-control text-center" name="startYear" id="startYear" value={this.state.startYear} />
                <label for="endYear">End Year</label>
                <input type="text" className="form-control text-center" name="endYear" id="endYear" value={this.state.endYear} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </div>
    }
});

