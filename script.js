// ARRAYS
var specialCh = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
var numericCh = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCasedCh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var finalPassword ='';
//ARRAYS

// Less than 8 or more than 125 return to prompt// 
function generatePassword() {
  var passwordLength = prompt("Enter length of password");
  console.log(passwordLength);
  var finalArray = [];

  if (passwordLength < 8 || passwordLength > 128) {
    console.log('passwordlength: '+ passwordLength );
    alert(' Numbers has to be between 8-128');
    return '';
    
  }


  //User 
  var containsSpecialCh = confirm("click ok to confirm including special characters.")
  console.log(containsSpecialCh);

  if (containsSpecialCh) {
    finalArray = finalArray.concat(specialCh)
    console.log(containsSpecialCh);
  }

  var containsnumericCh = confirm("click ok to confirm including numeric characters.")
  console.log(containsnumericCh);

  if (containsnumericCh) {
    finalArray = finalArray.concat(numericCh)
    console.log(containsnumericCh);
  }

  var containslowerCasedCh = confirm("click ok to confirm including lowercased characters.")
  console.log(containslowerCasedCh);

  if (containslowerCasedCh) {
    finalArray = finalArray.concat(lowerCasedCh)
    console.log(containslowerCasedCh);
  }
  var containsupperCasedCh = confirm("click ok to confirm including uppercased characters.")
  console.log(containsupperCasedCh);

  if (containsupperCasedCh) {
    finalArray = finalArray.concat(upperCasedCh);
    console.log(containsupperCasedCh);
  }

  if (containsSpecialCh == false && containslowerCasedCh == false && containsnumericCh == false && containsupperCasedCh ){
    alert ( 'Choose at least one please')
    return ''

  }

  for( let i=0; i< passwordLength; i++ ){
    var randomvalue = Math.floor(Math.random() * finalArray.length)
    finalPassword = finalPassword.concat(finalArray[randomvalue]);
    
  }

  return finalPassword;

}
//User//

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");
  passwordText.value= password 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
