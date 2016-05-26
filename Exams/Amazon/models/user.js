var models = models || {};

var User = (function (scope) {

    var counter = 0;
    function User(username, fullname, balance){
        this._id = ++counter;
        this.username = username;
        this.fullname = fullname;
        this._balance = balance;
        this._shoppingCart = new scope._ShoppingCart(); //hidden
                                                        //it is called that way because is in separate scope(file))
                                                        //another way: this._shoppingCart = scope.getShoppingCart
    }

    User.prototype.addItemToCart = function addItemToCart(item){
        //if(this._balance - item.price < 0){
        //    throw new Error("You have not enough money.")
        //}
        this._shoppingCart.addItem(item);
        this._balance -= item.price
    };

    //return
    scope.getUser =  function (username, fullname, balance) {
        return new User(username, fullname, balance);
    };

})(models);