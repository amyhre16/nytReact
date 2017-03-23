'use strict';

var axios = require('axios');

var router = require('react-router');

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require('../components/Main');
var Saved = require('../components/children/Saved');
var Result = require('../components/children/Result');

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="saved" component={Saved} />
            <Route path="result" component={Result} />

            <IndexRoute component={Saved} />
        </Route>
    </Router>
);