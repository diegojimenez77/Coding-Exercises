// Use Moment.js to format the following variables:
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("2021-06-15").format("MMM Do, YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format("hh:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
$("#6a").text(unixFormat);

var body = document.body;
    var footer = document.createElement("footer");
    var ancla = document.createElement("a");
    //Append Footer & add style
    body.appendChild(footer);
    footer.appendChild(ancla);
    ancla.textContent = "Exercise Instructions"
    footer.setAttribute("style", "padding: 10px; color: white; background: #72668c; text-align: center; position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #580E58;")
    ancla.setAttribute("href", "./instructions.html")