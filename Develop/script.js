// Assignment code here 
var lowerAlph = "abcdefghijklmnopqrstuvwxyz";
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericVal = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var characters = "";
var passwordCharacters= [];

// 3
function generateCharacters(props) {
  console.log(props);
  var promptLower = window.confirm('Confirm whether or not to include lowercase characters');
  var promptUpper = window.confirm('Confirm whether or not to include uppercase characters');
  var promptNumeric = window.confirm('Confirm whether or not to include numerical characters');
  var promptSpecial = window.confirm('Confirm whether or not to include special characters');
  console.log(promptLower);
  console.log(promptUpper);
  console.log(promptNumeric);
  console.log(promptSpecial);
  var j = 0;
  if (promptLower == true) {
    j++;
    characters = characters + lowerAlph;
    var random = Math.floor(Math.random() * lowerAlph.length);
    console.log(lowerAlph.length);
    passwordCharacters.push(lowerAlph.charAt(random));
    console.log(passwordCharacters);
  }
  if (promptUpper == true) {
    j++;
    characters = characters + upperAlph;
    var random = Math.floor(Math.random() * upperAlph.length);
    console.log(upperAlph.length);
    passwordCharacters.push(upperAlph.charAt(random));
    console.log(passwordCharacters);
  }
  if (promptNumeric == true) {
    j++;
    characters = characters + numericVal;
    var random = Math.floor(Math.random() * numericVal.length);
    console.log(numericVal.length);
    passwordCharacters.push(numericVal.charAt(random));
    console.log(passwordCharacters);
  }
  if (promptSpecial == true) {
    j++;
    characters = characters + specialChar;
    var random = Math.floor(Math.random() * specialChar.length);
    console.log(specialChar.length);
    passwordCharacters.push(specialChar.charAt(random));
    console.log(passwordCharacters);
  }

  if (j==0) {
    alert("Please choose at least one character type");
    return;
  }

  for (i=0; i < props-j; i++) {
    var random = Math.floor(Math.random() * characters.length);
    passwordCharacters.push(characters.charAt(random));
  }
  console.log(passwordCharacters);
  var complete = passwordCharacters.join("");
  console.log(complete);
  return complete;
}

// 2
function generatePassword() {
  // ask user to indicate length of password
  var promptLength = window.prompt('Please pick a length (number value) of at least 8 characters and no more than 128 characters');

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

  else if (promptLength === null) {
    return;
  }


  console.log(promptLength);

  var password = generateCharacters(promptLength);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// 1 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordCharacters= [];
  characters = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
