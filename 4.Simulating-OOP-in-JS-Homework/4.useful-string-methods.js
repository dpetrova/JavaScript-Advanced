/**
 * Created by Daniela on 13/02/2016.
 */
String.prototype.startsWith = function(substring){
    //return this.indexOf(substring) === 0
    //return this.indexOf(substring) === 0 ? true : false;
    return this.substr(0, substring.length) === substring;
};

String.prototype.endsWith = function(substring){
    //return this.lastIndexOf(substring) === (this.length - substring.length) ? true : false;
    return this.substr(this.length - substring.length, substring.length) === substring
};

String.prototype.left = function(count){
    return this.substr(0, count);
};

String.prototype.right = function(count){
    return this.slice(-count);
    //return this.substring(this.length - count, this.length);
};

String.prototype.padLeft = function(count, character){
    //var char = character || " ";
    //var addition = "";
    //for (var i = 0; i < count; i++) {
    //    addition += char;
    //}
    //return addition + this;

    return Array(count + 1).join(character || " ") + this;
    //return character.repeat(count) + this;
};

String.prototype.padRight = function(count, character){
    //var char = character || " ";
    //var addition = "";
    //for (var i = 0; i < count; i++) {
    //    addition += char;
    //}
    //return this + addition;

    return this + Array(count + 1).join(character || " ");
    //return this + character.repeat(count);
};

String.prototype.repeat = function(count){
    //var repeated = "";
    //for (var i = 0; i < count; i++) {
    //    repeated += this;
    //}
    //return repeated;

    return Array(count + 1).join(this);
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.endsWith("something else"));
console.log(example.left(9));
console.log(example.left(90));
console.log(example.right(9));
console.log(example.right(90));
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
var character = "*";
console.log(character.repeat(5));
console.log("~".repeat(3));

// Combinations must also work
var example2 = "abcdefgh";
console.log(example2.left(5).right(2));
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));



