var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// create function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    //select form element by its name attribure and get its value
    var shoppingItem = $('input[name="shopping-input"]').val();

    // if there's nothing in the form entered, don't print to the page
    if(!shoppingItem) {
        console.log('No shopping item filled out in form!');
        return;
    }

    //print to the page
    shoppingListEl.append('<li>' + shoppingItem + '</li>');

    // clear the form input element
    $('input[name="shopping-input"]').val('');
}

// Create a submit event listener on the form element
shoppingFormEl.on('submit', handleFormSubmit);

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")