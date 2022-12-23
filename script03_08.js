// variable properties and methods in arrays

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES
// Get a property of an obj by name:
// console.log("Array length: ", pens.length);

// METHODS
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift();

// Add comma-separated list of values to the front of the array
// pens.unshift("purple", "black");

// Remoive the last value of the array:
// pens.pop();

// Add comma-separated list of values to the end of the array
// pens.push("pink", "perussian blue");

// Find the specified position (pos) and remove n number from the array
// pens.splice(pos, n); ||pos= the position u intend to strt from and n=number of items u want to remove
//starts at the 2nd item in the list
// pens.splice(2, 1);

// Arrays after
// console.log("After: ", pens);

// methods below just return values to us and dont necessarily augment the array
// create a copy of an array. Typically assigned to  a var
// var newPens = pens.slice();
// console.log("New Pens: ", newPens);

// Return the first element that matches the search pens
// var result = pens.indexOf(search, index);
// var result = pens.indexOf("orange", 1) //here we specify the item we want to search eg orange and the index position to start from eg 1 for blue
// console.log("The index position is: ", result);
// console.log("The actual value is: ", pens[result]); //obtain the actual value of the index

// Return the items in an array as a comma separated value
// var arrayString = pens.join(separator symbol)
// var arrayString = pens.join(" | "); //join() can help output contents of an array as a single string
// console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-us/docs/web/JavaScript