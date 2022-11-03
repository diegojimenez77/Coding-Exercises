// Access multiple elements using .querySelectorAll()

var divTags = document.querySelectorAll("div");
var ptags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");

//Access element by ID using .querySelector()
var changeP = document.querySelector("#change2");

//Sets changeP to have multiple style attributes
changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline;");

//Sets image source of the first image
imgEl[0].setAttribute("src", "https://comotos.co/wp-content/uploads/2022/07/Yamaha-YZF-R6-ano-2008-2009-.jpg");

// Adds size and width stylig to image
imgEl[0].setAttribute("style", "width:100%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
    divTags[i].setAttribute("style", "color:blue; font-size: 30px");
}

// gives style to p tags
for (var i = 0; i < ptags.length; i++) {
    ptags[0].setAttribute("style", "color:red; font-size: 20px");
}