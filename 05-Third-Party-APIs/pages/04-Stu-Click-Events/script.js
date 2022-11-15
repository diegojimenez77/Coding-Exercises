var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

//Use the correct selector # to select a button by its ID and not class
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Function returns a string of concatenated characters of length num
function passwordGenerator(num) {
    var password = '';
    for (var i = 0; i < num; i++) {
        password += getPasswordCharacter();
    }
    return password;
}

// Change the event listener to click to make the event trigger on single-click
passwordBtnEl.on('click', function() {
    var newPassword = passwordGenerator(15);
    passwordDisplayEl.text(newPassword);
});

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")