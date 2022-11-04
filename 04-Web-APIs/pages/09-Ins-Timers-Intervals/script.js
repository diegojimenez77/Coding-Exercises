// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
    //Sets interval in variable
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Segundos restantes para la explosion de color.";
        if(secondsLeft === 0) {
            //Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and appemd image
            sendMessage();
        }
    }, 1000);
}

//Function to create and appemd colorsplosion image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "https://images.unsplash.com/photo-1637019837948-58c4c4eb8082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80");
    mainEl.appendChild(imgEl);
}
setTime();