// defining 2 const elements, 1 for fig and 1 for the img inside the fig
const FEATURED = document.querySelector(".featured-image");

const THEIMAGE = FEATURED.querySelector("img");

// getting the image's alt attribute, use getAttri_ method
var altText = THEIMAGE.getAttribute("alt");

// creating a fig caption doc, using a variable, sitting in browser memory
var captionElement = document.createElement("figCaption");

// creating a textNode to hold the altText
var captionText = document.createTextNode(altText);

// appending the captionText-textNode inside the captionElement
captionElement.appendChild(captionText);

// to see everything works as intended
// console.log(captionElement);

// now append the new captionElement to the figure
FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");