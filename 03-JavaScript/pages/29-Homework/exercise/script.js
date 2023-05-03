
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var caracteres = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZ1234567890!@#$%^&*()";
  var LowerCaseAlert = window.alert("Do you want lower Case Caracters? : ");
  var UpperCaseAlert = window.alert("Do you want Upper Case Caracters? : ");
  var NumericAlert = window.alert("Do you want Numeric Caracters? : ");
  var SpecialAlert = window.alert("Do you want Special Caracters? : ");
 
  var passwordlengt = window.prompt("Enter the Password number of characters: ");
  var password = "";

  for (var i = 0; i < passwordlengt; i++){

    var randomNumber = Math.floor(Math.random()*caracteres.length);
    console.log(randomNumber);
    password += caracteres.substring(randomNumber,randomNumber +1);
    console.log(password);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
