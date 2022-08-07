// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare variables
//make list for character letters, numbers, special characters
const upper = [
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
const lower = [
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
const special = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var upperCasePrompt;
var lowerCasePrompt;
var chooseLengthPrompt;
var specialCharacterPrompt;
var numericCharacterPrompt;
var upperCase;
var lowerCase;
var specialCharacter;
var numeric;
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
  chooseLengthP = prompt(
    "How many characters would you like?, Click OK to confirm"
  );
  //set length range parameters
  if (chooseLengthP <= 7 || chooseLengthP >= 128) {
    alert(
      "Character length must be between 8 and 128 characters, please try again, or click 'Cancel' to exit."
    );
    generatePassword(); //starts prompt again if not within range
  } else {//prompt user to confirm character choices
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
  
  //create if condition where if nothing is selected, user is prompted to beginning
  if (
    lowerCasePrompt === false &&
    upperCasePrompt === false &&
    specialCharacterPrompt === false &&
    numericCharacterPrompt === false
  ) {
    alert(
      "Password must contain at least one character type.  Please try again."
    );
    return;
    //create else if based on a single criteria being chosen
  } else if (lowerCasePrompt) {
    chosenCharacter = lower;
  } else if (upperCasePrompt) {
    chosenCharacter = upper;
  } else if (specialCharacterPrompt) {
    chosenCharacter = special;
  } else if (numericCharacterPrompt) {
    chosenCharacter = number;
  } else //create else if based on any two criteria being chosen
    if (lowerCasePrompt && upperCasePrompt) {
      chosenCharacter = lower.concat(upper);
    } else if (lowerCasePrompt && specialCharacterPrompt) {
      chosenCharacter = lower.concat(special);
    } else if (lowerCasePrompt && numericCharacterPrompt) {
      chosenCharacter = lower.concat(number);
    } else if (upperCasePrompt && specialCharacterPrompt) {
      chosenCharacter = upper.concat(special);
    } else if (upperCasePrompt && numericCharacterPrompt) {
      chosenCharacter = upper.concat(number);
    } else if (specialCharacterPrompt) {
      chosenCharacter = special.concat(number);
    } else //create else if based on any 3 criteria being chosen
      if (lowerCasePrompt && upperCasePrompt && specialCharacterPrompt) {
        chosenCharacter = lower.concat(upper, special);
      } else if (lowerCasePrompt && specialCharacterPrompt && numericCharacterPrompt) {
        chosenCharacter = lower.concat(special, number);
      } else if (lowerCasePrompt && upperCasePrompt && numericCharacterPrompt) {
        chosenCharacter = lower.concat(upper, number); 
      } else if (upperCasePrompt && specialCharacterPrompt && numericCharacterPrompt) {
        chosenCharacter = upper.concat(special, number);
      } else //create else if based on all 4 criteria being chosen
        if (lowerCasePrompt && upperCasePrompt && specialCharacterPrompt && numericCharacterPrompt) {
          chosenCharacter = lower.concat(upper, special, number);
        }

   
    
}
//generate the password using user input
function createRandomPassword() {
  
  }

  //create a for loop to calculate password
  for (i = 0; i < ; i++) {
    
}

//return the generated password.
