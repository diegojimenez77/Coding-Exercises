var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".box")) {
        var state = element.getAttribute("data-state");

        // Use an if statement to conditionally render the number o nthe card
        if (state === "hidden") {
            // If the card is clicked while the state is "hidden", we set .textContent to the number
            element.textContent = element.dataset.number;
            // Using the dataset property, we change the state to visible because the user can now see the number
            element.dataset.state = "visible";
        } else {
            // 'Hide' the number by setting .textContent to an empty string
            element.textContent= "";
            // Use .setAttribute() metthod
            element.setAttribute("data-state", "hidden")
        }
    }
});

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")