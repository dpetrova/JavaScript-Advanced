/**
 * Created by Daniela on 04/02/2016.
 */
function printArgsInfo(){
    for (var i in arguments) {
        console.log(arguments[i] + " (" + (arguments[i] instanceof Array ? "array" : typeof(arguments[i])) + ")");
    }
}

//using call() without arguments
printArgsInfo.call();

//using call() with arguments
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);

//using apply() without arguments
printArgsInfo.apply();

//using apply() with arguments
printArgsInfo.apply(null, [2, 3, 2.5, -110.5564, false]);