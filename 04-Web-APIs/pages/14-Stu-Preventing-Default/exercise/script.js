var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
}

function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
    // Prevent default action
    event.preventDefault();
    // Store tip and total calculations in variables
    var tipPercentage = tipEl.value * .01;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    // Update HTML with tip and total
    document.querySelector("#tip-amount").textContent = tipAmount;
    // Use toFixed() to limit to two decimal places
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);     
}

// Add listener to submit element
submitEl.addEventListener("click", addTip);

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")