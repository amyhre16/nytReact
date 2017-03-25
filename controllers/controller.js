'use strict';

var Article = require('../models/Article');
var request = require('request');

module.exports = function (app) {
    app.get("/favicon.ico", function (req, res) {
        res.send(204);
    });

    app.get('/runQuery', function (req, res) {
        var apiKey = "2ab3ce7e5fd14511b80ed99e05fd242e";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q='Texas Longhorns'";
        console.log("\nHello from runQuery\n");
        request({ method: 'GET', uri: queryURL/*, gzip: true */}, function (error, response, body) {
            if (error) console.log(error);

			var results = JSON.parse(response.body);
            
            console.log(results.response.docs[0].web_url);
			console.log(results.response.docs[0].headline.main);
            if (results.response.docs[0]) {
				res.send(results.response.docs);
            }
			else res.send([]);
        });
    });

    app.get('/getSavedArticles', function (req, res) {
        Article.find({}, function (err, doc) {
            res.send(doc);
        });
    });

    app.post('/saveArticle', function (req, res) {
        var newArticle = new Article(req.body);

        newArticle.save(function (err, doc) {
            if (err) throw err;
        });
    });

    app.post('/deleteArticle', function (req, res) {
        Article.findOneAndRemove({ _id: req.body.id }, function (err, doc) {
            if (err) throw err;
        });
    });
}