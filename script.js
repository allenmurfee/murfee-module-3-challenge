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

  var specialCharValues = [" ", "!", "\"", "#", "$", "\%", "\&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // var index = Math.floor(Math.random() * 


  // Utilize var name = parseInt(prompt) Google this
  var passLength = prompt("How long do you want your password to be? It must be between 8 and 128 characters.");
  
  if (passLength <= 7 || passLength >= 129) {
    return alert("ERROR: Must be between 8 and 128 characters."); 
  }

  var lowerCase = confirm("Do you want lowercase letters in your password?");
  
  var upperCase = confirm("Do you want uppercase letters in your password?");

  var numeric = confirm("Do you want numbers in your password?");

  var specialChar = confirm("Do you want special characters in your password?");

  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    return alert("ERROR: Must contain at least one value."); 
  }

  
}

writePassword();

