// const keyword
// const MYCONSTANT = 5;

// console.log(MYCONSTANT);

// let keyword
function logScope() {
    var localVar = 2;

    // creating an if statement
    // 'let' keyword allows redefining variables' scope for a particular block of code
    if (localVar) {
        let localVar = "I'm different!";
        console.log("nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);

}

logScope()
// console.log("logScope localVar: ", localVar);

