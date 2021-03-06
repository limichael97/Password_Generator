// Assignment code here 

// Variables are assigned
var lowerAlph = "abcdefghijklmnopqrstuvwxyz";
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericVal = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var characters = "";
// this is the array which will hold the characters of the pw
var passwordCharacters= [];


function generateCharacters(props) {
  console.log(props);
  // ask users what they want their pw to be composed of and then stores in variable
  var promptLower = window.confirm('Confirm whether or not to include lowercase characters');
  var promptUpper = window.confirm('Confirm whether or not to include uppercase characters');
  var promptNumeric = window.confirm('Confirm whether or not to include numerical characters');
  var promptSpecial = window.confirm('Confirm whether or not to include special characters');
  console.log(promptLower);
  console.log(promptUpper);
  console.log(promptNumeric);
  console.log(promptSpecial);

  // counter to check how many prompts they confirmed to. Counter will go up by one if prompt is true
  var j = 0;

  // the first four characters of pw are determined here and pushed to 'passwordCharacters' array
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

  // if user doesn't select at least one type of character, then they are alerted to do so
  if (j==0) {
    alert("Please choose at least one character type");
    return;
  }

  // the rest of the password is randomly selected here, pushed to the 'passwordCharacters' array and joined to become one single string
  for (i=0; i < props-j; i++) {
    var random = Math.floor(Math.random() * characters.length);
    passwordCharacters.push(characters.charAt(random));
  }
  console.log(passwordCharacters);
  var complete = passwordCharacters.join("");
  console.log(complete);
  return complete;
}

// When the 'Generate Button' button is pressed, user will be asked how long they want their password. generateCharacters function is called here
function generatePassword() {
  // ask user to indicate length of password
  var promptLength = window.prompt('Please pick a length (number value) of at least 8 characters and no more than 128 characters');

  // validate prompt answer
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Does not meet the numerical requirement! Please try again.");
    // use return to call function again and stop rest of function from running
    return generatePassword();
  }

  // if user puts in a value that is not a number, an alert will show and go back prompt
  else if (isNaN(promptLength)) {
    window.alert("Please enter a numerical value.");
    // use return to call function again and stop rest of function from running
    return generatePassword();
  }

  else if (promptLength === null) {
    return;
  }


  console.log(promptLength);

  // pw is stored here after the following function is complete
  var password = generateCharacters(promptLength);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// password is displayed on screen for user to see
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordCharacters= [];
  characters = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
