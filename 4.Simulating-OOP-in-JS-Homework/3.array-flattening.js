/**
 * Created by Daniela on 13/02/2016.
 */
Array.prototype.flatten = function(){
    var newArr = [];
    innerTraverse(this);

    function innerTraverse(arr) {
        //for (var i = 0; i < arr.length; i++) {
        //    if (arr[i] instanceof Array) {
        //        innerTraverse(arr[i]);
        //    } else {
        //        newArr.push(arr[i]);
        //    }
        //}
        arr.forEach(function(element){
            if (element instanceof Array) {
                innerTraverse(element);
            } else {
                newArr.push(element);
            }
        })
    }

    return newArr;
};

var array1 = [1, 2, 3, 4];
console.log(array1);
console.log(array1.flatten());

var array2 = [1, 2, [3, 4], [5, 6]];
console.log(array2);
console.log(array2.flatten());

var array3 = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array3);
console.log(array3.flatten());
