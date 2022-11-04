var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message = 'Algunos dicen que aprender codigo y programacion es facil, otros dicen que es imposible esto no es para mi, pero lo que en realidad requiere aprender a programar es estar dispuesto a pagar el precio, pues requier de mucho tiempo de practica, para algunas personas no es posible aprender a programar tan solo entendiendo ejercicios y ver como funciona, es necesario ensuciarse las manos y hacer cada ejercicio y practica por uno mismo, de otra forma no es posicle aprenderlo.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
    var timeleft = 5;

    // use the 'setInterval()' method to call a function to be executed every 1000 miliseconds
    var timeInterval = setInterval(function(){
    //As long as the 'timeleft' is greater than 1
    if(timeleft > 1){
        //set the 'textConten' of 'timeEl' to show the remaining seconds
        timerEl.textContent = timeleft + ' segundos restantes';
        //Decrement 'timeLeft" by 1
        timeleft--;
    } else if (timeleft === 1) {
        // When 'timeLeft' is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeleft + ' segundo restante';
        timeleft--;
    }else {
        //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
        timerEl.textContent = '';
        //Use 'clear Interval()' to stpo the timer
        clearInterval(timeInterval);
        //Call the 'displayMessage()' function
        displayMessage();
    }
    }, 1000)
}

// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;

    //Uses the 'setInterval()' method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
        //If there are no more words left in the message
        if(words[wordCount] === undefined) {
            //Use 'clearInterval()' to stop the timer
            clearInterval(msgInterval);
        }else {
            // Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 250);
}

countdown();