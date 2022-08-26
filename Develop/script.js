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
  var passLength = prompt("How long do you want your password to be? Between 8 and 128 character.");
  
  if (passLength <= 7 || >= 129) {
    return alert("Must be between 8 and 128 characters."); 
  }
 
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  if (!lowerCase) {
    return; 
  }
  
  var upperCase = confirm("Do you want uppercase letters in your password?");
  if (!upperCase) {
    return; 
  }

  var numeric = confirm("Do you want numbers in your password?");
  if (!numeric) {
    return; 
  }

  var specialChar = confirm("Do you want special characters in your password?");
  if (!specialChar) {
    return; 
  }
}

