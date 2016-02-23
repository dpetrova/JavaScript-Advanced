/**
 * Created by Daniela on 05/02/2016.
 */
var compose = function(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
};

function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

console.log(compose(addOne, square)(5));
console.log(compose(Math.cos, addOne)(-1));
console.log(compose(addOne, Math.cos)(-1));

var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));
