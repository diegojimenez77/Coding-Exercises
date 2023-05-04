var body = document.body;
var footer = document.createElement("footer");
var ancla = document.createElement("a");

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// the following function renders items in a todo list as <li> elements
function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    // Render a new li for each todo
    for (var i = 0; i< todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStoreage
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    // If todos were retreived from localStorage, update the todos array to it
    if ( storedTodos !== null) {
        todos = storedTodos;
    }

    // This is a helper function that will render todos to the DOM
    renderTodos();
}

function storeTodos() {
    // Stringify and set key in LocalStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();  

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
});

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
    var element = event.target;

    // checks if element is a button
    if (element.matches("button") === true){
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        //Store updated todos in local Storage, re-render the list
        storeTodos();
        renderTodos();
    }
});

// Calls init to retreive data and render it to the page on load
init()

//Append Footer & add style
body.appendChild(footer);
footer.appendChild(ancla);
ancla.textContent = "Exercise Instructions"
footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
ancla.setAttribute("href", "./instructions.html")