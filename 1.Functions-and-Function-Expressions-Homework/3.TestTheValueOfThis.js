/**
 * Created by Daniela on 04/02/2016.
 */
function testContext(){
    console.log(this);
}

//the global scope -> window object
testContext();

//inside another function
function functionContext(){
    testContext();
}

functionContext(); // returns the scope of the functionContext(), which is the global scope

//as an object
var objectContext = new testContext(); //the scope of newly created object -> {}
