'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    // title of the article
    title: { 
        type: String,
        index: true,
        unique: true,
        required: true
    },
    // date and time that the article was published
    date: {
        type: Date
    },
    // url for article
    url: {
        type: String
    }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;