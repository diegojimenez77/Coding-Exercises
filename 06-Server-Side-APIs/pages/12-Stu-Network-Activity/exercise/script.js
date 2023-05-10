requestUrl = 'https://api.github.com/orgs/nodejs/repos';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");
//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")