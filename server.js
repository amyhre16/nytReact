'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/Article');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

// mongoose.connect("mongodb://heroku_b0vtck2r:j0qs87g8k67c8hbn3bngj0ek8d@ds135680.mlab.com:35680/heroku_b0vtck2r");
mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/nytreact");

var db = mongoose.connection;

db.on('error', function(err) {
    console.log("Mongoose Error:", err);
    throw err;
});

db.once("open", function() {
    console.log("Mongoose connection successful");
});

app.listen(process.env.PORT || 8080, function() {
    console.log("Server is listneing on port", process.env.PORT || 8080);
});