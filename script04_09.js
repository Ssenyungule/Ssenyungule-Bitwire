// looking at how to create objects
var course = new Object();

//set up object properties | which are variables associated with the obj
// course.title = "JavaScript Essentials Training";
// course.instructor = "Ssenyungule Herbert";
// course.level = 1;
// course.published = true;
// course.views = 0;

// alternatively, we can use shorthand below
var course = {
    title: "JavaScript Essential Training",
    instructor: "Ssenyungule Herbert",
    level: 1,
    published: true,
    views: 0,
    // creating a method that updates views using an Anonymous Function
    updateViews: function() {
        return ++course.views;
    }
}

// output to console
console.log(course.views);

course.updateViews();

console.log(course.views);
