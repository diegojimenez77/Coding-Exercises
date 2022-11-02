// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accesing style objects properties
console.log(articlesDiv);
console.log(headerDiv);

articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';