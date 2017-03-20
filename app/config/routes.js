'use strict';

var axios = require('axios');

var router = require('react-router');

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require('../components/Main');
var Saved = require('../components/Saved');
var Search = require('../components/Search');

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="saved" component={Saved} />
            <Route path="search" component={Search} />

            <IndexRoute component={Saved} />
        </Route>
    </Router>
);