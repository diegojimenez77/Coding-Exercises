// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    header.setAttribute("style", "background-color:  #2a607c");
    main.setAttribute("style", "background-color: #fff");
    
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    header.setAttribute("style", "background-color: black");
    main.setAttribute("style", "background-color: black");
  }
});
