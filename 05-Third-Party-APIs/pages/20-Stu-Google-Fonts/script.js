var formEl = $('#guestbook-form');
var nameInputEl = $('#name-input');
var commentInputEl = $('#comment-input');

var guestBookDisplayEl = $('#guest-book-display');

var printGuestData = function (name, comment) {
  var cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  var cardEl = $('<div>');
  // add a class of .custom-card
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  // add a class of .custom-card-header
  var cardName = $('<h5>').addClass('card-header custom-card-header').text(name);
  cardName.appendTo(cardEl);

  var cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  var cardComment = $('<p>').addClass('card-text').text(comment);
  cardComment.appendTo(cardBodyEl);

  guestBookDisplayEl.append(cardColumnEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var commentInput = commentInputEl.val();

  if (!nameInput || !commentInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printGuestData(nameInput, commentInput);

  // reset form
  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

var body = document.body;
    var footer = document.createElement("footer");
    var ancla = document.createElement("a");
    //Append Footer & add style
    body.appendChild(footer);
    footer.appendChild(ancla);
    ancla.textContent = "Exercise Instructions"
    footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
    ancla.setAttribute("href", "./instructions.html")