// defining variables
var a = 5/7;
var b = 18/25;

// defining the anonymous function which has no name
// similarly, formal arguments can also be used as it is with Named funcs
// var theBiggest = function() {
    var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    // console.log(result);
    // alternatively we can use the return keyword and still get same result
    return result;
}

// calling the variable that has tthe anonymous function
// theBiggest();

// with return keyword, we need to add console before the called variable
// console.log(theBiggest());
// and once again call the variable with its actual parameters |
// which aren't affected by defined variables
console.log(theBiggest(7/9,13/25));