// Regular function, called explicitly by name;
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function  stored in variabke.
// invoked by calling the variable as a function
var divided = function() {
    var result = 3/4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately invoked function expression
// Runs as soon as the rowser finds it
(function() {
    var result = 12 / 0.75;
    console.log("12 divide by 0.75 is ", result);
}())
