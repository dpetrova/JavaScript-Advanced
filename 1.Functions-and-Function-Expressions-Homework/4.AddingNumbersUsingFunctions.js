/**
 * Created by Daniela on 04/02/2016.
 */

//Closure in Javascript with multiple brackets
//The first time your function is called, the first value is stored in sum.
//After that function f(b) will be returned, maintaining the provisional result in sum.
//With each consecutive call you execute function f - you perform sum += b and return f again.
//If a string context is required (such as in the alert, or a console.log) f.toString is called instead, returning the result (sum).
function add(a) {
    var sum = a;

    function f(b) {
        sum += b;
        return f;  //<- from second call, f is returned each time
                  //   so you can chain those calls indefinitely
                  //   function sum basically got "overridden" by f
    }

    f.toString = function() {
        return sum;
    }

    return f; //<- after first call, f is returned
}

console.log(add(1)(2).toString());
console.log(add(1)(0)(-1)(-1).toString());

var addTwo = add(2);
console.log(addTwo(3)(5).toString());

