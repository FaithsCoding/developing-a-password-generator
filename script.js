// Character array
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
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters array
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

//This function is used to allow a random selection of array characters highlighted in the above list.
//Math.floor is rounding down the Math.Random which is being multipled by array length.
function getRandom(array) {
  var ranIndex = Math.floor(Math.random() * array.length);
  var element = array[ranIndex];
  //The return element is displaying what this function has completed.
  return element;
}

//Below uses prompt, alert and confirm methods allowing the user to choose password options.
//prompt - asks a question
//confirm - has the options 'ok' or 'cancel' which log as boolean values true or false.
//alert - stops the user from proceeding if they don't choose any of the options.
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
  //we are using this object to return the users input
  var passwordOptionsObj = {
    length: pwdLength,
    upper: includeUppercaseLetters,
    lower: includeLowercaseLetters,
    number: includeNumbers,
    specialCharacters: includeSpecialCharacters,
  };

  return passwordOptionsObj;
}

//This function is using the possible characters from each array and concatinating (adding) them with another array.
//From that we are asking it to gurantee a random character and push that into each array.
//A console log is allowing us as a developer to see the information this is producing.
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

  if (pwdOptionsObj.number) {
    possibleCharacters = possibleCharacters.concat(numberArray);
    guranteeCharacters.push(getRandom(numberArray));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }

  if (pwdOptionsObj.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(characterArray);
    guranteeCharacters.push(getRandom(characterArray));
    console.log(possibleCharacters);
    console.log(guranteeCharacters);
  }

  //This for loop is telling JS if pwdOptionsObj is less then 0 then i++ (add 1). This causes the code to keep looping.
  //For example if user chooses 30 this will loop 30 times to create that password.
  for (var i = 0; i < pwdOptionsObj.length; i++) {
    finalPassword.push(getRandom(possibleCharacters));
    console.log(finalPassword);
  }
  //This return is displaying the var finalPassword which is joined with the arrays.
  return finalPassword.join("");
}

// The query selector is a method used to return elements that match with another selector.
var generateBtn = document.querySelector("#generate");

// This function is writing the password to the password option.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The event listner is what runs all the above code when the user clicks on the button stated in the HTML.
generateBtn.addEventListener("click", writePassword);
