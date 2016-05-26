var models = models || {};

var Item = (function (scope) {

    var counter = 0;
    function Item(title, description, price){
        this._id = ++counter;
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    Item.prototype.addCustomerReview = function addCustomerReview(review){
        this._customerReviews.push(review);
    };

    Item.prototype.getCustomerReviews = function getCustomerReviews(){
        return this._customerReviews;
    };

    //return
    scope._Item = Item;
    scope.getItem =  function (title, description, price) {
        return new Item(title, description, price);
    };

})(models);