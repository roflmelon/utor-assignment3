// Assignment Code
var generateBtn = document.querySelector('#generate');

//All ASCII char into variables and set it as an array
let upperCase = generateChar(65, 91);
let lowerCase = generateChar(97, 123);
let numbers = generateChar(48, 58);
let specialChar1 = generateChar(33, 48);
let specialChar2 = generateChar(58, 65);
let specialChar3 = generateChar(91, 97);
let specialChar4 = generateChar(123, 127);
let allSpecialChar = specialChar1.concat(
  specialChar2,
  specialChar3,
  specialChar4
);
let selection;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  selection = window.prompt(
    'How many Characters long do you want your pass word to be?? **MUST BE BETWEEN 8 AND 128**'
  );

  if (selection >= 8 && selection <= 128) {
    return createPassword();
  } else if (!selection) {
    window.alert('Maybe next time!');
  } else if (selection === NaN) {
    window.alert('Invalid input, Please try again!');
    generatePassword();
  } else {
    if (
      window.confirm(
        'Please input a value between 8 and 128!! Would you like to try again?'
      )
    ) {
      generatePassword();
    } else {
      window.alert('Maybe next time!');
    }
  }
}

//createPassword will be called in the generatePassword() once all error checking is met.
//createPassword will prompt user through the password preference selections then proceeds to combine the ASCII characters that has been assigned from earlier into an array.
//Then Math.random() will pick randomly through the array and attach itself to the empty string for the final password.
function createPassword() {
  let upperSelect;
  let lowerSelect;
  let numSelect;
  let specialSelect;
  let combinedArray = [];
  let password = '';

  upperSelect = window.confirm('Would you like to have uppercase?');
  console.log(upperSelect);
  lowerSelect = window.confirm('Would you like to have lowercase?');
  console.log(lowerSelect);
  numSelect = window.confirm('Would you like to have numbers?');
  console.log(numSelect);
  specialSelect = window.confirm('Would you like to have special characters?');
  console.log(specialSelect);

  if (upperSelect) {
    combinedArray = combinedArray.concat(upperCase);
  }
  if (lowerSelect) {
    combinedArray = combinedArray.concat(lowerCase);
  }
  if (numSelect) {
    combinedArray = combinedArray.concat(numbers);
  }
  if (specialSelect) {
    combinedArray = combinedArray.concat(allSpecialChar);
  }
  console.log(combinedArray);
  for (let i = 0; i < selection; i++) {
    password = password.concat(
      combinedArray[Math.floor(Math.random() * combinedArray.length)]
    );
  }
  return password;
}

//generateChar() will put all the ASCII characters into an array to be combined later so Math.random() could randomly pick from it.
function generateChar(startIndex, endIndex) {
  let charArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}
