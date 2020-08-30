// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // Array of special characters to be included in password
  const specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

  // Array of numeric characters to be included in password
  const numerical = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  // Array of lowercase characters to be included in password
  const lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // Array of uppercase characters to be included in password
  const uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];






  // Password is currently blank! We need to make a better one
  let password = "";

  //Array for new password
  let passwordChoices = [];

  let passwordLenth = prompt("How Many Charactors For Your New Password?");

  // If password is less then 8 digits alert "Try Again!"
  if (passwordLenth < 8) {
    alert("Try Again!");
  }

  // Else password is greater then 8 digits, alert "Would you like to use lowercase?"
  else {
    let passwordLowerCase = confirm("Would you like to use lowercase?")
    let passwordUpperCase = confirm("Would you like to use uppercase?")
    let passwordNumerical = confirm("Would you like to use numerics?")
    let passwordSpecialCharacters = confirm("Would you like to use special characters?")

    
    //User selects the parameter for password

    if (passwordLowerCase === true) {
      passwordChoices = passwordChoices.concat(passwordLowerCase);
      console.log("Characters selected:" + passwordChoices);
    }
    

    if (passwordUpperCase === true) {
      passwordChoices = passwordChoices.concat(passwordUpperCase);
      console.log("Characters selected:" + passwordChoices);
    }

    
    if (passwordNumerical === true) {
      passwordChoices = passwordChoices.concat(passwordNumerical);
      console.log("Characters selected:" + passwordChoices);
    }


    if (passwordSpecialCharacters === true) {
      passwordChoices = passwordChoices.concat(passwordSpecialCharacters);
      console.log("Characters selected:" + passwordChoices);
    }

    //Loop to select the random characters and create new password

    for (let i = 0; i < passwordLenth; i++ ) {
      password = password + passwordChoices[Math.floor(Math.random() * passwordChoice.length)];
      
      console.log(password);
    }

  }





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
