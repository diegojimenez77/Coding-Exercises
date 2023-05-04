var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");
var count = 0;

// Select increment and decrement button elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updated count on page
function setCounterText() {
    countEl.textContent = count;
}

// Attach event listener to increment button element
incrementEl.addEventListener("click", function(){
    count++;
    setCounterText();
});

decrementEl.addEventListener("click", function() {
    // Action will fire if count is greater than 0
    if (count > 0) {
        count--;
        setCounterText();
    }
});

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")