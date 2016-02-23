var imdb = imdb || {};

(function (scope) {
    var counter = 0;
    function Review(author, content, date){
        this._id = ++counter;
        this.author = author;
        this.content = content;
        this.date = date;
    }

    scope.getReview =  function (author, content, date) {
        return new Review(author, content, date);
    };

})(imdb);