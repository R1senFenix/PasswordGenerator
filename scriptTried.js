var passGoesHere = document.querySelector("#passGoesHere");
var getPassJS = document.querySelector("#getPass")

var getValues = "";
var howLong = getValues[0];
var specBool = getValues[1];
var numBool = getValues[2];
var lowBool = getValues[3];
var uppBool = getValues[4];
var intLong = parseInt(howLong); //turns how long into an integer
const specChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //string of all possible special characters
const numChar = "0123456789"; //string of all possible numbers
const lowChar = "abcdefghijklmnopqrstuvwxyz";
const uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeStr = ""; //string to be filled out with all possible characters
var passNew = ""; //empty string for password to fill to

//if statements to decide what characters to include
if (getValues !== "") {
  if (intLong >= 8 && intLong <= 128) {
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
  } else {
    alert(
      "we are not able to make a new password for you with the information available."
    );
  }
}
console.log(includeStr); // sends potential characters to the console

function randomPassGenerator(intLong) {
  var passNew = ""; // Empty value of the selective variable
  while (intLong--) {
    passNew += includeStr.substr(
      Math.floor(Math.random() * includeStr.length + 1),
      1
    ); // selecting any value from allCharacters varible by using Math.random()
  }
  return passNew; // returns the generated alpha-numeric string
}

//prompts for starting questions
function promptQuestions() {
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
  getValues = [howLong, specBool, numBool, lowBool, uppBool];
  return getValues;

}

getPassJS.addEventListener("click", promptQuestions())
document.writeln(randomPassGenerator(intLong));
passGoesHere.textcontent = (randomPassGenerator(intLong));

