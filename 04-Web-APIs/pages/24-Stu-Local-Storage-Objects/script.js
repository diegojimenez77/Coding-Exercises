var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event){
    event.preventDefault();

    // create user object from submission
    var user = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    // set new submission to local storage
    localStorage.setItem("user", JSON.stringify(user));
});

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")
