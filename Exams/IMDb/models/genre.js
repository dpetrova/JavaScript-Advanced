var imdb = imdb || {};

(function (scope) {
    var counter = 0;
    function Genre(name){
        this._id = ++counter;
        this.name = name;
        this._movies = [];
    }

    Genre.prototype.addMovie = function addMovie(movie){
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie){
        //first way:
        //this._movies = this._movies.filter(function(currMovie){
        //    return currMovie !== movie;
        //})

        //second way:
        var index = this._movies.indexOf(movie);
        this._movies.splice(index, 1);
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(id){
        var movie = this._movies.filter(function(currMovie){
            return currMovie.id === id;
        });
        this.deleteMovie(movie);
    };

    Genre.prototype.getMovies = function getMovies(){
        return this._movies;
    };

    //return
    scope.getGenre =  function (name) {
        return new Genre(name);
    };

})(imdb);