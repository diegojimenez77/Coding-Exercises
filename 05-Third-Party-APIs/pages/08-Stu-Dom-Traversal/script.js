var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/Select DOM elements
var rootEl = $('#root');

//Starting from the root element, '<main id="root">', select all the boxes and change the background colort to white.
rootEl.children('ul').children().css('background-color', 'white');

// Select the last '<ul>' or the third row.
// Long traversal can be segmented to provide better readability.
var rowThree = rootEl.children('ul').eq(2);

// Select the children of the '<ul>', then select the forst box and add the '0".
rowThree.children().eq(0).text('X');

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")
