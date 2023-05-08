var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

// Create a `<p>` element to store the quote's author and assign to a new variable
var authorEl = $('<p>');

// Add text to the author element
authorEl.text('~ Carol Dweck');

// Add the class `plain` to the author element
authorEl.addClass('plain');

// Create a `<h1>` element and assign to new variable
var quoteEl = $('<h1>');

// Add a meaningful quote to the quote element
quoteEl.text(
  'Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'
);

// Apply the class `fancy` to the quote element
quoteEl.attr('class', 'fancy');

// Attach the author element to the quote element
quoteEl.append(authorEl);

// Append the quote element to the page
rootEl.append(quoteEl);


//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")