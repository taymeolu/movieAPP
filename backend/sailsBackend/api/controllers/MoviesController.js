/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function (req, res) {
        var fetch = require('node-fetch');
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=f153a168a75fb9dd9e689bbb3b502d40&language=en-US&query=a&page=1&include_adult=false';
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var results = [];
            data.results.forEach(element => {
                var movie = {};
                movie.id = element.id;
                movie.title = element.title;
                movie.overview = element.overview;
                movie.price = Math.random() * 1000;
                results.push(movie);
            });
            res.send(results);
        });
    }

};

