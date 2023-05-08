var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
shoppingFormEl.on('submit', handleFormSubmit);


//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")