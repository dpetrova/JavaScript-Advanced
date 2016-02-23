var imdb = imdb || {};

(function (scope) {
    var counter = 0;
    function Theatre(title, length, rating, country, isPuppet){
        scope._Movie.call(this, title, length, rating, country);
        this._id = ++counter;
        this.isPuppet = isPuppet || false;
    }

    Theatre.extends(scope._Movie);

    scope.getTheatre =  function (title, length, rating, country, isPuppet) {
        return new Theatre(title, length, rating, country, isPuppet);
    };

})(imdb);