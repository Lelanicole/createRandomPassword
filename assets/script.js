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
var specialCharacter = [
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
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCase;
var lowerCase;
var length = "";
var specialCharacter;
var numericCharacter;

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
  var length = prompt("How many characters would you like?");
  //set length range parameters
  if (length < 8 || length > 128) {
    alert(
      "Character length must be between 8 and 128 characters, please try again"
    );
    generatePassword(); //starts prompt again if not within range
  } else {
    //create else that starts special case prompt
  }

  //prompt user to confirm character choices

  //generate the password using user input

  //return the generated password.
}
