'use strict';

var React = require('react');


var Result = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel panel-header">
                    <h3><strong>Results</strong></h3>
                </div>
                <div className="panel panel-body" id="resultsPanel">
                    {this.props.results.map(function (search, i) {
                        return (
                            <div className="pane panel-default">
                                <div className="panel panel-header">
                                    <h4 key={search._id}><a href={search.web_url}>{search.headline.main}</a></h4>
                                </div>
                                <div className="panel panel-header">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
});

module.exports = Result;