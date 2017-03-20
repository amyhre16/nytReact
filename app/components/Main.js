'use strict';

var React = require('react');

var Form = require('./children/Form');
var Results = require('./children/Result');
var Saved = require('./children/Saved');

var helpers = require('./utils/helpers');

var Main = React.createClass({
    getInitialState: function () {
        return { searchTerm: {}, results: "", savedArticles: "" }
    },
    componentDidMount: function () {
        helpers.getSavedArticles().then(function (response) {
            console.log(response);
            this.setState({ savedArticles: response.data });
        }.bind(this));
    },
    componentDidUpdate: function () {
        helpers.runQuery(this.state.searchTerm).then(function (data) {
            if (data !== this.state.results) {
                console.log("Results", data);
                this.setState({ results: data });
            }
        }.bind(this));
    },
    setTerm: function (term) {
        this.setState({ searchTerm: term });
    },
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h1>New York Times Article Scrubber</h1>
                            <p><em>Search for and annotate articles of interest!</em></p>
                        </div>
                    </div>
                </div>

                {/* Search Form */}
                <div className="row">
                    <div className="col-md-6">
                        <Form setTerm={this.setTerm} />
                    </div>
                </div>

                {/* Search Results */}
                <div className="row">
                    <div className="col-md-6">
                        <Results results={this.state.results} />
                    </div>
                </div>

                {/* Saved Articles */}
                <div className="row">
                    <Saved savedArticles={this.state.savedArticles} />
                </div>
            </div>
        );
    }
});


module.exports = Main;