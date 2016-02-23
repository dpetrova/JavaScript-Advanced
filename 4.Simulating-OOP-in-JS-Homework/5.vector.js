/**
 * Created by Daniela on 13/02/2016.
 */
var Vector = (function(){

    function Vector(dimensions){
        if (dimensions === undefined || dimensions.length === 0) {
            throw "Vector dimensions cannot be null";
        }
        this._dimensional = dimensions.length;
        this._components = dimensions;
    }

    Vector.prototype.toString = function(){
        return "(" + this._components.join(", ") + ")";
    };

    Vector.prototype.add = function(vector){
        if(this._dimensional !== vector._dimensional){
            throw new Error("The addition is operation on equally dimensional vectors.")
        }

        var result = [];
        for (var i = 0; i < this._dimensional; i++) {
            result.push(this._components[i] + vector._components[i])
        }

        return new Vector(result);
    };

    Vector.prototype.subtract = function(vector){
        if(this._dimensional !== vector._dimensional){
            throw new Error("The subtraction is operation on equally dimensional vectors.")
        }

        var result = [];
        for (var i = 0; i < this._dimensional; i++) {
            result.push(this._components[i] - vector._components[i])
        }

        return new Vector(result);
    };

    Vector.prototype.dot = function(vector){
        if(this._dimensional !== vector._dimensional){
            throw new Error("Dot product is operation on equally dimensional vectors.")
        }

        var result = Number.MIN_VALUE;
        for (var i = 0; i < this._dimensional; i++) {
            result += this._components[i] * vector._components[i];
        }

        return result;
    };

    Vector.prototype.norm = function(){
        var squaredComponentsSum = 0;
        for (var i = 0; i < this._dimensional; i++) {
            squaredComponentsSum += Math.pow(this._components[i], 2);
        }

        return Math.sqrt(squaredComponentsSum);
    };

    return Vector;
})();

// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
var result = a.add(b);
console.log(result.toString());
//a.add(c); // Error
var result2 = a.subtract(b);
console.log(result2.toString());
//a.subtract(c); // Error
var result3 = a.dot(b);
console.log(result3.toString());
//a.dot(c); // Error
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
