// Assignment code here
function generatePassword() {
  // ask user to indicate length of password
  var promptLength = window.prompt ('Please pick a length (number value) of at least 8 characters and no more than 128 characters');

  // validate prompt answer
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Does not meet the numerical requirement! Please try again.");
    // use return to call function again and stop rest of function from running
    return generatePassword();
  }

  else if (isNaN(promptLength)) {
    window.alert("Please enter a numerical value.");
    // use return to call function again and stop rest of function from running
    return generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
