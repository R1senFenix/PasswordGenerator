//prompts for starting questions
var howLong = prompt(
  "Enter a number between 8 to 128 for how long the password will be.",
  8
);
var specBool = confirm(
  "Would you like to incude special characters in your password?"
);
var numBool = confirm("Would you like to include numbers in your password?");
var lowBool = confirm(
  "Would you like to include lowercase letters in your password?"
);
var uppBool = confirm(
  "Would you like to include uppercase letters in your password?"
);

var intLong = parseInt(howLong); //turns how long into an integer
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //string of all possible special characters
var numChar = "0123456789"; //string of all possible numbers
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeStr = ""; //string to be filled out with all possible characters

//if statements to decide what characters to include
if (specBool === true) {
  includeStr = includeStr + specChar;
}
if (numBool === true) {
  includeStr = includeStr + numChar;
}
if (lowBool === true) {
  includeStr = includeStr + lowChar;
}
if (uppBool === true) {
  includeStr = includeStr + uppChar;
}
if (
  specBool === false &&
  numBool === false &&
  lowBool === false &&
  uppBool === false
) {
  alert(
    "we are not able to make a new password for you with the information available."
  );
}

console.log(includeStr);
