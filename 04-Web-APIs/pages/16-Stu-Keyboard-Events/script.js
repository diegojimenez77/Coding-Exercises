var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

function keydownAction(event) {
    // The key property holds the value of the key pressed
    var keyPress = event.key;
    // The code property holds the kay's code
    var keyCode = event.code;
    // Updates content on page
    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = keyCode;
    document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
    // Updates event to KEYUP Event when key is released
    document.querySelector("#status").innerHTML = "KEYUP Event"
}
// Adds listener for keydown event
document.addEventListener("keydown", keydownAction);
// Adds listener for keyup event
document.addEventListener("keyup", keyupAction);

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")