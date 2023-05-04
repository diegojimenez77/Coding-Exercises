var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse (event) {
    //Prevent default action
    event.preventDefault();
    console.log(event);
    var response = "Gracias por enviar tu informacion " + nameInput.value + " - Te contactaremos en " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
}

// Add listener to submit elemnt
submitEl.addEventListener("click", showResponse);