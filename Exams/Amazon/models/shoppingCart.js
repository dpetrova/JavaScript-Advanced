var models = models || {};

var ShoppingCart = (function (scope) {

    var counter = 0;
    function ShoppingCart(){
        this._id = ++counter;
        this._items = [];
    }

    ShoppingCart.prototype.addItem = function addItem(item){
        this._items.push(item);
    };

    ShoppingCart.prototype.getTotalPrice = function getTotalPrice(){
        var totalPrice = 0;
        this._items.forEach(function(item){
            totalPrice += item.price;
        });
        return totalPrice;
    };

    //return
    scope._ShoppingCart = ShoppingCart; //to be visible in other files(scope)

    scope.getShoppingCart = function getShoppingCart() {
        return new ShoppingCart();
    };

})(models);