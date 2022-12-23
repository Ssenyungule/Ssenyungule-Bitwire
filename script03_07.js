// Arrays

// first create an uninitialised variable
// below is the shorthand

// var pens;
// pens = ["red", "blue", "green", "orange"]

// console.log(pens);


// below is the longhand::shows that an array is an obj
pens = new Array("red", "blue", "green", "orange");
console.log(pens);

pens[3] = "purple";
console.log(pens);

var fourthPen = pens[3];
console.log(fourthPen);