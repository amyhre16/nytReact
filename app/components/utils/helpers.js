'use strict';

var axios = require('axios');

var apiKey = "2ab3ce7e5fd14511b80ed99e05fd242e";

var helper = {
    runQuery: function (searchTerm) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q='Texas Longhorns'";
        return axios.get('/runQuery');
    },
    getSavedArticles: function () {
        return axios.get('/getSavedArticles');
    },
    saveArticle: function (newArticle) {
        return axios.post('/saveArticle', newArticle);
    },
    deleteArticle: function (id) {
        return axios.post('/deleteArticle', { id: id });
    }
};

module.exports = helper;