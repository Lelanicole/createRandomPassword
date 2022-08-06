// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare variables
//make list for character letters, numbers, special characters
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var newPassword = "";
var upperCasePrompt;
var lowerCasePrompt;
var lengthPrompt;
var specialCharacterPrompt;
var numericCharacterPrompt;
var upperCase;
var lowerCase;
var specialCharacter;
var numeric;
var calculate = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need to create function  generatePassword (){
function generatePassword() {
  //prompt user for length
  var lengthPrompt = prompt(
    "How many characters would you like?, Click OK to confirm"
  );
  //set length range parameters
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert(
      "Character length must be between 8 and 128 characters, please try again, or click 'Cancel' to exit."
    );
    generatePassword(); //starts prompt again if not within range
  }

  //prompt user to confirm character choices

  lowerCasePrompt = confirm(
    "Would you like your password to include lowercase letters?"
  );

  upperCasePrompt = confirm(
    "Would you like your password to include capital letters?"
  );

  specialCharacterPrompt = confirm(
    "Would you like your password to include special characters?"
  );

  numericCharacterPrompt = confirm(
    "Would you like your password to include numbers?"
  );
  //create an if statement that can calculate random values for each criteria, math methods?
  //math.floor(Math.random()*array.length)
  if (lowerCasePrompt) {
    var lowerCaseCalculation = Math.floor(Math.random() * lower.length);
    lowerCase = lower[lowerCaseCalculation];
    newPassword = newPassword.concat(lowerCase);
    console.log(newPassword);
  }

  if (upperCasePrompt) {
    var upperCaseCalculation = Math.floor(Math.random() * upper.length);
    upperCase = upper[upperCaseCalculation];
    newPassword = newPassword.concat(upperCase);
    console.log(newPassword);
  }

  if (specialCharacterPrompt) {
    var specialCharacterCalculation = Math.floor(
      Math.random() * special.length
    );
    specialCharacter = special[specialCharacterCalculation];
    newPassword = newPassword.concat(specialCharacter);
    console.log(newPassword);
  }

  if (numericCharacterPrompt) {
    var numericCharacterCalculaton = Math.floor(Math.random() * number.length);
    numeric = number[numericCharacterCalculaton];
    newPassword = newPassword.concat(numeric);
    console.log(newPassword);
  }
  //generate the password using user input

  //return the generated password.
}
