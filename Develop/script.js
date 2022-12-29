// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialArr = ['!', '@', '#', '$', '*', '%']

function myFunction() {

  // Password variable to return
  let password = "";

  // Ask user for the length of the text that they want
  let length = prompt("What is the length of the password?");
  if (length > 128 || length < 8) {
    alert("The length of the password should be less than 128 and greater than 8!");
    return;
  }

  // Ask user to include lowercase, uppercase, numeric, and/or special characters
  const lower = confirm("Include lowercase characters?");
  const upper = confirm("Include uppercase characters?");
  const numeric = confirm("Include numeric characters?");
  const special = confirm("Include special characters?");

  if (!lower && !upper && !numeric && !special) {
    alert("You must enter atleast one character type!");
    return;
  }

  const array = [];
  if (lower) array.push(1);
  if (upper) array.push(2);
  if (numeric) array.push(3);
  if (special) array.push(4);

  for (let i = 0; i < length; i++) {
    // what type of special character should we include
    const randomIndex = Math.floor(Math.random() * array.length);
    const charType = array[randomIndex];
    
    if (lower && charType == 1) {
      let index = Math.floor(Math.random() * (lowerCaseArr.length - 1)) + 1;
      password += lowerCaseArr[index];
    } else if (upper && charType == 2) {
      let index = Math.floor(Math.random() * (upperCaseArr.length - 1)) + 1;
      password += upperCaseArr[index];
    } else if (numeric && charType == 3) {
      let index = Math.floor(Math.random() * (numbersArr.length - 1)) + 1;
      password += numbersArr[index];
    } else if (special && charType == 4) {
      let index = Math.floor(Math.random() * (specialArr.length - 1)) + 1;
      password += specialArr[index];
    } 
    console.log(password);
  }
  // Display the password in alert
  alert(password);
}