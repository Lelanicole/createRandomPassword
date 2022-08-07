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
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var chosenCharacter = "";

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
  } else {
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
  }
  if (
    !lowerCasePrompt &&
    !upperCasePrompt &&
    !specialCharacterPrompt &&
    !numericCharacterPrompt
  ) {
    chosenCharacter = alert(
      "Password must contain at least one character type.  Please try again."
    );
  } //create else if based on all 4 criteria being chosen
  else if (
    lowerCasePrompt &&
    upperCasePrompt &&
    specialCharacterPrompt &&
    numericCharacterPrompt
  ) {
    chosenCharacter = lower.concat(upper, special, number);
  } //create else if based on any 3 criteria being chosen
  else if (lowerCasePrompt && upperCasePrompt && specialCharacterPrompt) {
    chosenCharacter = lower.concat(upper, special);
  } else if (
    lowerCasePrompt &&
    specialCharacterPrompt &&
    numericCharacterPrompt
  ) {
    chosenCharacter = lower.concat(special, number);
  } else if (lowerCasePrompt && upperCasePrompt && numericCharacterPrompt) {
    chosenCharacter = lower.concat(upper, number);
  } else if (
    upperCasePrompt &&
    specialCharacterPrompt &&
    numericCharacterPrompt
  ) {
    chosenCharacter = upper.concat(special, number);
  } //create else if based on a single criteria being chosen
  else if (lowerCasePrompt) {
    chosenCharacter = lower;
  } else if (upperCasePrompt) {
    chosenCharacter = upper;
  } else if (specialCharacterPrompt) {
    chosenCharacter = special;
  } else if (numericCharacterPrompt) {
    chosenCharacter = number;
  }
  console.log(chosenCharacter);
  //generate the password using user input
  var newPassword = "";

  for (var i = 0; i < lengthPrompt; i++) {
    newPassword =
      newPassword +
      chosenCharacter[Math.floor(Math.random() * chosenCharacter.length)];
    console.log(newPassword);
  } //return the generated password.

  return newPassword;
}
