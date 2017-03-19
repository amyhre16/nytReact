var React = require('react');
var Main = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1>New York Times Article Scrubber</h1>
                        <p><em>Search for and annotate articles of interest!</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel panel-header">
                            <h2><strong>Search</strong></h2>
                        </div>
                        <div className="panel panel-body">
                            <label for="topic">Topic</label>
                            <input type="text" name="topic" id="topicSearch" />
                            <label for="startYear">Start Year</label>
                            <input type="text" name="startYear" id="startYear" />
                            <label for="endYear">End Year</label>
                            <input type="text" name="endYear" id="endYear" />
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        );
    }
});