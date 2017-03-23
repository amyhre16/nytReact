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

        this.props.setTerm(this.state.topic);
        // this.setState({ term });
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel panel-header">
                    <h3><strong>Search</strong></h3>
                </div>
                <div className="panel panel-body">
                    <label>Topic</label>
                    <input type="text" className="form-control text-center" id="topic" value={this.state.topic} onChange={this.handleChange} required />

                    <label>Start Year</label>
                    <input type="text" className="form-control text-center" id="startYear" value={this.state.startYear} />

                    <label>End Year</label>
                    <input type="text" className="form-control text-center" id="endYear" value={this.state.endYear} />

                    <br />
                    <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>Search</button>
                </div>
            </div>
        )
    }
});

module.exports = Form;