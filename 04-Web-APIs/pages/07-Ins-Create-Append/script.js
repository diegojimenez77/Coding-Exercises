// Stores user response in a variable y genera un prompt soliciatndo un texto del usuario
var tagName = prompt("Por favor ingreasa una de las siguinetes etiquetas HTML (ej. h1, h2, p, div):", "Teclea una etiqueta");

if(tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
    alert("Por favor ingresa una etiqueta valida");
} else {
    //Creates element based on tag entered by user / crea en el HTML el elemento ingresaso por el usuario
    var tag = document.createElement(tagName);

// Adds text content to created tag / pone texto al tag que el usuario pidio
tag.textContent = "Esto fue creado con lo ingresado en el Prompt. Es un " + tagName + ".";

// Appends tag as child of document body / inserta el tag en el html con el texto.
document.body.appendChild(tag);
}

var nextTag = confirm("Te gustaria agregar otra etiqueta");

if (nextTag === true) {
    var secondTagName = prompt("Por favor ingresa otra etiqueta HTML (ej. h1, h2, p, div):", "Teclea otra etiqueta");
    if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div"){
        alert("Por favor ingresa una etiqueta valida");
    } else {
        var secondTag = document.createElement(secondTagName);
        secondTag.textContent = "Esta es la segunda etiqueta creada por medio de prompts, es un " + secondTagName + ".";
        document.body.appendChild(secondTag);
    }
}