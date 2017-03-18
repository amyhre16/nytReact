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

mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/nytreact");

var db = mongoose.connection;

app.listen(process.env.PORT || 8080, function() {
    console.log("Server is listneing on port", process.env.PORT || 8080);
});