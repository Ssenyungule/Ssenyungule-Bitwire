// // concept of closures
// function doSomeMath() {
//     var a = 5;
//     var b = 4;
//     // var sum = a + b;

//     // return sum;

//     // below is a closure example ie
//     // a function inside another function, relies on variables defined in the outside function
//     // to achieve its result
//     function multiply() {
//         var result = a*b;
//         return result;
//     }

//     return multiply;

// }

// var theResult = doSomeMath();

// // console.log("The result: ", theResult);

// console.log("The result: ", theResult());

// another useCase scenario
function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;

    }

    return doTheMath;
}

// setting up variables to call for various giveMeEms
var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small Size: ", smallSize() );
console.log("Medium Size: ", mediumSize() );
console.log("Large Size: ", largeSize() );
console.log("ExtraLarge Size: ", xlargeSize() );