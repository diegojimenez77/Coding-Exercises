fetch(
    // Explain each parameter in comments below.
    'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  // Parameter explanation.
  // The per_page parameter will limit the results base per page.
  // The state parameter represents the current state of the issue. It can be open, closed, or all.
  // Sort will order the results based on the parameter given, the date created, updated, or comments.
  // Direction will determine the order of the sort.
  

  var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");
//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")