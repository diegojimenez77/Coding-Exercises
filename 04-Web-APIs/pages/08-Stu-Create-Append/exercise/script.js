var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var footer = document.createElement("footer");
var ancla = document.createElement("a");

//Create ordered list element
var listEl = document.createElement("ol");
//Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten .";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

//Add text for list items
li1.textContent = "Apples 🍎";
li2.textContent = "Pizza 🍕";
li3.textContent = "Dumplings 🍘";
li4.textContent = "Cupcakes 🍧";

//Adding footer text
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);
// Appemd list itmes to ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
//Append footer
body.appendChild(footer);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style","margin:auto; width:100%; text-align:center;");
imgEl.setAttribute("src","https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png");
imgEl.setAttribute("style","height:auto; width:100%;");
nameEl.setAttribute("style","font-size:25px; text-align:center;");
kittenEl.setAttribute("style","font-size:25px; text-align:center;");
favoriteEl.setAttribute("style","font-size:30px;");
// Add styling to list element
listEl.setAttribute("style","background:#333333; padding:30px;");
// Add styling to list items
li1.setAttribute("style", "color:white; background:#666666; padding:5px; margin-left:35px;");
li2.setAttribute("style", "color:white; background:#777777; padding:5px; margin-left:35px;");
li3.setAttribute("style", "color:white; background:#888888; padding:5px; margin-left:35px;");
li4.setAttribute("style", "color:white; background:#999999; padding:5px; margin-left:35px;");
// Add styling to footer
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html");
