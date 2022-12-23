// not good practice for a function to be relient on programmer
// hence passing formal arguments at start makes it reusable and useful

// a function that can compare fractions
// return values also allow a function to be reusable at many instances
function findBiggestFraction(a,b) {
    // console.log("the function is running!");
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}
// define two variables that store some functions
// order matters ie calling the function below the variables is better
var firstFraction = 3/4;
var secondFraction = 5/7;

// now pass the different defined variable values into the function
// as actual arguments for (a,b)
// findBiggestFraction(firstFraction,secondFraction);

// thus the reusability; by calling the function with various arguments
// findBiggestFraction(7/16,13/25);
// findBiggestFraction(1/2,3/4);

// without consle the value can't be output
// console.log(findBiggestFraction(firstFraction,secondFraction));

// Or
var fractionResult = findBiggestFraction(firstFraction,secondFraction);
// console.log(fractionResult);

// A more simplistic way of making it understandable
console.log("First fraction is: ", firstFraction);
console.log("Second fraction is: ", secondFraction);
console.log("Frcation " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");