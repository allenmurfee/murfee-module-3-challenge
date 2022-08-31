// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password Function
function generatePassword() {
  var specialCharValues = [
    " ",
    "!",
    '"',
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

  var lowerCaseValues = [
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

  var upperCaseValues = [
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

  var numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var passConditions = [];

  var passLengthPrompt = prompt(
    "How long do you want your password to be? It must be between 8 and 128 characters.",
    "0"
  );

  // Changes passLengthPrompt to integers
  var passLength = parseInt(passLengthPrompt);

  // Returns error if the password length isn't within the criteria
  if (passLength <= 7 || passLength >= 129) {
    return alert("ERROR: Must be between 8 and 128 characters.");
  }

  var lowerCase = confirm("Do you want lowercase letters in your password?");

  var upperCase = confirm("Do you want uppercase letters in your password?");

  var numeric = confirm("Do you want numbers in your password?");

  var specialChar = confirm("Do you want special characters in your password?");

  // Returns error if the user doesn't select at least one of the 4 criteria above
  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    return alert("ERROR: Must pick at least one value.");
  }

  // These 4 if statements add whatever criteria the user selected into a variable called passConditions
  if (lowerCase) {
    passConditions = lowerCaseValues.concat(passConditions);
  }

  if (upperCase) {
    passConditions = upperCaseValues.concat(passConditions);
  }

  if (numeric) {
    passConditions = numericValues.concat(passConditions);
  }

  if (specialChar) {
    passConditions = specialCharValues.concat(passConditions);
  }

  // This loop randomizes the criteria the user selected as many times as the password length selected. Then, it adds the results into a variable called generate, which is the final password.
  if (lowerCase || upperCase || specialChar || numeric) {
    var generate = " ";
    for (var i = 0; i < passLength; i++) {
      var randomize = passConditions[Math.floor(Math.random() * passLength)];
      //
      generate = generate + randomize;
    }
  }

  return generate;
}

writePassword();
