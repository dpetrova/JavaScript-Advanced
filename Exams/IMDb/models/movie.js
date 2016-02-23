var imdb = imdb || {};

(function (scope) {
    var counter = 0;
    function Movie(title, length, rating, country){
        this._id = ++counter;
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
    }

    Movie.prototype.addActor = function addActor(actor){
        this._actors.push(actor);
    };

    Movie.prototype.getActors = function getActors(){
        return this._actors;
    };

    Movie.prototype.addReview = function addReview(review){
        this._reviews.push(review);
    };

    Movie.prototype.deleteReview = function deleteReview(review){
        //first way:
        //this._reviews = this._reviews.filter(function(currReview){
        //    return currReview !== review;
        //})

        //second way:
        var index = this._reviews.indexOf(review);
        this._reviews.splice(index, 1);
    };

    Movie.prototype.deleteReviewById = function deleteReviewById(id){
        var review = this._reviews.filter(function(currReview){
            return currReview.id === id;
        });
        this.deleteReview(review);
    };

    Movie.prototype.getReviews = function getReviews(){
        return this._reviews;
    };

    //return
    scope._Movie = Movie;
    scope.getMovie =  function (title, length, rating, country) {
        return new Movie(title, length, rating, country);
    };

})(imdb);