/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    search: function (req, res) {
        var fetch = require('node-fetch');
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f153a168a75fb9dd9e689bbb3b502d40&language=en-US';
        
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
                movie.image = 'https://image.tmdb.org/t/p/original' + element.poster_path;
                movie.price = Number.parseFloat((Math.random() * 1000).toFixed(2));

                results.push(movie);
            });

            res.send(results);
        })
        .catch(function (){
            var result = {};
            result.id = 99;
            result.message = 'Could not fetch';
            res.send(result);
        });
    }

};

