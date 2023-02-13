var characterArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var uppercaseLetterArray = [
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
var lowercaseLetterArray = [
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

function getRandom(array) {
  var ranIndex = Math.floor(Math.random() * array.length);
  var element = array[ranIndex];

  return element;
}

function passwordOptions() {
  var pwdLength = parseInt(
    prompt("How many characters should your password be?")
  );
  if (pwdLength < 8 || pwdLength > 128) {
    alert("password must be 8 to 128 characters long");
  }
  var includeUppercaseLetters = confirm(
    "Do you want to include uppercase letters?"
  );
  var includeLowercaseLetters = confirm(
    "Do you want to include lowercase letters?"
  );
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecialCharacters = confirm(
    "Do you want to include special characters?"
  );

  if (
    includeUppercaseLetters === false &&
    includeLowercaseLetters === false &&
    includeNumbers === false &&
    includeSpecialCharacters === false
  ) {
    alert("Please choose value");
    return null;
  }

  var passwordOptionsObj = {
    length: pwdLength,
    upper: includeUppercaseLetters,
    lower: includeLowercaseLetters,
    number: includeNumbers,
    specialCharacters: includeSpecialCharacters,
  };

  return passwordOptionsObj;
}

function generatePassword() {
  var pwdOptionsObj = passwordOptions();

  var finalPassword = [];
  var possibleCharacters = [];
  var guranteeCharacters = [];

  if (pwdOptionsObj.upper) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetterArray);
    guranteeCharacters.push(getRandom(uppercaseLetterArray));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }

  if (pwdOptionsObj.lower) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetterArray);
    guranteeCharacters.push(getRandom(lowercaseLetterArray));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }

  if (pwdOptionsObj.numbers) {
    possibleCharacters = possibleCharacters.concat(numberArray);
    guranteeCharacters.push(getRandom(number));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }

  if (pwdOptionsObj.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(characterArray);
    guranteeCharacters.push(getRandom(characterArray));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(getRandom(pwdOptionsObj));

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

