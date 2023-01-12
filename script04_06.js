
var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];

    return result;
})(7/9,13/25)

// output
// console.log(theBiggest(7/9,13/25));

// if you tried to output the variable itself | the entire function structure id produced
// with the use of immediately invoked functionsits possible
// wrap the funcn into parantheses and immediately invoke it by passing formal arguments
console.log(theBiggest);