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

var chosenCharacter = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lengthPrompt = prompt(
    "How many characters would you like?, Click OK to confirm"
  );

  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert(
      "Character length must be between 8 and 128 characters, please try again, or click 'Cancel' to exit."
    );
    generatePassword();
  } else if (isNaN(lengthPrompt)) {
    alert(
      "Value entered must be a numeric value, such as '123' etc. please try again."
    );
  } else {
    lowerCasePrompt = confirm(
      "Would you like your password to include lowercase letters?"
    );
    if (lowerCasePrompt) {
      chosenCharacter = chosenCharacter.concat(lower);
    }

    upperCasePrompt = confirm(
      "Would you like your password to include capital letters?"
    );
    if (upperCasePrompt) {
      chosenCharacter = chosenCharacter.concat(upper);
    }

    specialCharacterPrompt = confirm(
      "Would you like your password to include special characters?"
    );
    if (specialCharacterPrompt) {
      chosenCharacter = chosenCharacter.concat(special);
    }

    numericCharacterPrompt = confirm(
      "Would you like your password to include numbers?"
    );
    if (number) {
      chosenCharacter = chosenCharacter.concat(number);
    }
    console.log(chosenCharacter);
  }
  if ((chosenCharacter = [])) {
    chosenCharacter = alert(
      "Password must contain at least one character type.  Please try again."
    );
    generatePassword();
  }

  var newPassword = "";

  for (var i = 0; i < lengthPrompt; i++) {
    newPassword =
      newPassword +
      chosenCharacter[Math.floor(Math.random() * chosenCharacter.length)];
    console.log(newPassword);
  } //return the generated password.

  return newPassword;
}
