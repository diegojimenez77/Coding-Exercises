
var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up")
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class",type);
}

function renderLastRegistered(){
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if(!email || !password) {
        return;
    }

    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    if(email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
        displayMessage("error", "Password cannot be blank");
    } else {
        displayMessage("success", "Regitered successfully");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderLastRegistered();
    }
});

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")
