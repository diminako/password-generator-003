// Assignment Code
var generateBtn = document.querySelector("#generate");

function randoGen(x) {
  return Math.floor(Math.random() * x)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLengthPrompt = prompt("Please enter the passwords length: at least 8 and no more than 128 characters")
  var passLength = parseInt(passLengthPrompt);
  var ifLowerPrompt = confirm("If you would like lower case characters choose ok.  If not choose cancel.")
  var ifUpperPrompt = confirm("If you would like UPPER case characters choose ok.  If not choose cancel.")
  var lowerUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var ifNumPrompt = confirm("If you would like numerical characters choose ok.  If not choose cancel.")
  var numChars = randoGen(10)
  var ifSpecialPrompt = confirm("If you would like special characters choose ok.  If not choose cancel.")
  var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "^", "="];

  if (passLength > 8 && passLength < 128) {
    for (var i = 1; passLength >= i )
  }






}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "^", "="];
// var specialChars1 = specialChars[randoGen(10)];
// var specialChars2 = specialChars[randoGen(10)];
// var userName = prompt("Please enter your first name.", "Name")
// var userAge = prompt("Please enter your birth year", "2020")
// var favAnimal = prompt("Please enter your favorite animal.", "dog")
// var passLengthPrompt = prompt("Please enter the passwords length: at least 8 and no more than 128 characters")
// var passLength = parseInt(passLengthPrompt)

// while (passLength > 8 || passLength < 128) {
//   passLength = prompt("Your selection must be between 8 and 128 characters.  Failure to choose will automatically assign 10 characters.")
// }




// var generatedPass = userAge[randoGen(4)] +
//   userName[randoGen(3)].toUpperCase() +
//   randoGen(10) +
//   specialChars1 +
//   favAnimal[randoGen(favAnimal.length)] +
//   randoGen(10) +
//   favAnimal[randoGen(favAnimal.length)] +
//   userName[userName.length - 1].toUpperCase() +
//   userAge[randoGen(4)] +
//   specialChars2;




// console.log(generatedPass);
// return generatedPass;
