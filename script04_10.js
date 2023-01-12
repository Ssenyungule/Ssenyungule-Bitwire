// making constructors
function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };

}

// similarly, we can use the constructor to populate an array with course objs
var courses = [

    new Course("Js Essential Training", "Ssenyungule Herbert", 1, true, 0),
    new Course("Up and Running with ECMAScript 6", "Bitwire Albert George", 1, true, 12345),

];

// using the created obj to create new instances of course obj
// var course01 = new Course("Js Essential Training", "Ssenyungule Herbert", 1, true, 0);

// creating more instances
// var course02 = new Course("Up and Running with ECMAScript 6", "Bitwire Albert George", 1, true, 12345);
// console.log(course01);

// console.log(course02);

// logging out at once
// console.log(courses);

// using array indexes to call out specific properties
console.log(courses[1].instructor);

// running the method inside the obj
console.log(courses[1].updateViews());