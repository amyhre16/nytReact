'use strict';

var Article = require('../models/Article');


module.exports = function (app) {
    app.get("/favicon.ico", function(req, res){
		res.send(204);
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