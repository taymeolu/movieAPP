/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: function(req, res){
      var url = '';
      fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            var results = data.results;
            
        })
  }

};

