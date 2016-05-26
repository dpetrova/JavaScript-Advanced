var models = models || {};

var UsedItem = (function (scope) {

    var condition = {
        veryGood: 'Very good',
        likeNew: 'Like new',
        good: 'Good',
        acceptable: 'Acceptable'
    };

    var counter = 0;

    function UsedItem(title, description, price, condition){
        scope._Item.call(this, title, description, price);
        this.condition = condition;
    }

    UsedItem.extends(scope._Item);

    //return
    scope.getUsedItem =  function (title, description, price, condition) {
        return new UsedItem(title, description, price, condition);
    };

})(models);
