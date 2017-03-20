'use strict';

var axios = require('axios');

var apiKey = "";

var helper = {
    getSavedArticles: function () {
        var queryURL = "";
        
        return axios.get(queryURL).then(function(response) {
            if (response.data.results[0]) {
                return response.data.results[0].formatted;
            }

            return "";
        });
    },

    runQuery: function(article) {
        console.log(article);
        return axios.post('/saveArticle', {articleID: article.id});
    }
};

module.exports = helper;