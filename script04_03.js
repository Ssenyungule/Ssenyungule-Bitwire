// not good practice for a function to be relient on programmer
// hence passing formal arguments at start makes it reusable and useful

// a function that can compare fractions
function findBiggestFraction(a,b) {
    // console.log("the function is running!");
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}
// define two variables that store some functions
// order matters ie calling the function below the variables is better
var firstFraction = 3/4;
var secondFraction = 5/7;

// now pass the different defined variable values into the function
// as actual arguments for (a,b)
findBiggestFraction(firstFraction,secondFraction);

// thus the reusability; by calling the function with various arguments
findBiggestFraction(7/16,13/25);
findBiggestFraction(1/2,3/4);
