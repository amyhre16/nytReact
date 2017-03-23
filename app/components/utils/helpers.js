'use strict';

var axios = require('axios');

var apiKey = "2ab3ce7e5fd14511b80ed99e05fd242e";

var helper = {
    runQuery: function () {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q='Texas Longhorns'";

        return axios.get(queryURL).then(function (response) {
            console.log(response.data.response.docs[0].web_url);
            console.log(response.data.response.docs[0].headline.main);
            if (response.data.response.docs[0]) {
                return response.data.response.docs[0];
            }

            return "";
        });
    },
    getSavedArticles: function () {
        // console.log(article);
        return axios.get('/getSavedArticles');
        // return {data: "Hello world"}
    },
    saveArticle: function (newArticle) {
        return axios.post('/saveArticle', newArticle);
    },
    deleteArticle: function (id) {
        return axios.post('/deleteArticle', { id: id });
    }
};

module.exports = helper;