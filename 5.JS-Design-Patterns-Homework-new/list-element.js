Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var ListElement = (function () {
    function ListElement(title) {
        this._title = title;
    };

    return ListElement;
}());