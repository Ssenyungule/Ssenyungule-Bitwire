// settinng up a new constant that points to the element we would be working with
const CTAELEMENT = document.querySelector(".cta a");

// applying the target attribute using If condition if its not there
if ( CTAELEMENT.hasAttribute("target") ) {
    console.log( CTAELEMENT.getAttribute("target") );
} else {
   CTAELEMENT.setAttribute("target", "_blank");
}

// checking for what attributes are applied to this element
console.log( CTAELEMENT.attributes );