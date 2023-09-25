/* Creation of the words table, then randomly selecting a word and storing it in the wordToBeGuessed variable */
// TABLE OF WORDS
const words = ["javascript", "php", "mysql", "symfony"];

// Function for selecting a random word
function getRandomWord(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Storing the random word into the wordToBeGuessed variable
let wordToBeGuessed = getRandomWord(words);

/* Initializing the number of guesses */
let wrongGuesses = 0;
let totalGuesses = 0;


/* Changing the wordToBeGuessed into underscores*/
// Initializing the empty tables for the underscores and the word cut into letters
let arrayUnderscore = [];
let arrayWordToBeGuessed = [];

// using the wordToBeGuessed, split the letters, store them in a table and change them with an underscore
function wordToUnderscore() {
    arrayWordToBeGuessed = wordToBeGuessed.split("");
    arrayUnderscore = wordToBeGuessed.split("").map(() => "_");
}

/* Changing the display in the HTML*/
function updateDisplay() {
  document.getElementById('word').innerHTML = arrayUnderscore.join(" ");
}

// Launch both functions
wordToUnderscore();
updateDisplay();

/* Handeling the input of the letter, then changing the underscore with the letter if the input matches */
function handleInput(inputLetter) {
// Checking if the input is not more then 1 letter
  if (inputLetter.length !== 1) {
    alert("Please enter only one letter.");
    return;
  }

  // Storing the positions of the input into the positions variable
  const positions = findIndicesOfElement(arrayWordToBeGuessed, inputLetter);

  // Checking if the posistions variable is not empty, then changing the underscore with the input letter, via the posistion
  if (positions.length > 0) {
    positions.forEach(index => {
      arrayUnderscore[index] = inputLetter;
    });
    // Add a turn to the total guesses if the input matches
    totalGuesses = totalGuesses + 1;
    document.getElementById('numberOfTurns').innerHTML = `Total turns played: ${totalGuesses}`;
// Update the display to show the letters instead of the underscore
    updateDisplay();
  } else {
    alert("Letter not found in the word.");
    // Add a wrong guess to the counter
    wrongGuesses = wrongGuesses + 1;
    
    // Add a guess to the total guesses
    totalGuesses = totalGuesses + 1;
    document.getElementById('numberOfTurns').innerHTML = `Total turns played: ${totalGuesses}`;
  }
}
/* Getting the position of each letter in the word from the input */
function findIndicesOfElement(arrayWordToBeGuessed, inputLetter) {
    // Create an empty table
    const indices = [];
    // Loop over the wordToBeGuessed.
  for (let i = 0; i < arrayWordToBeGuessed.length; i++) {
    // Map every position where the input matches the letter and push them to the indices table.
    if (arrayWordToBeGuessed[i] === inputLetter) {
      indices.push(i);
    }
  }
  // Return the table.
  return indices;
}

/* Handle the submit of the form */
function handleSubmit(event) {
    // Block the reload of the page.
  event.preventDefault();
  // Get the input and change to lowercase
  const inputLetter = document.getElementById('input').value.toLowerCase();
 
  // Launch the function handeInput
  handleInput(inputLetter);

  /* Handle the wrong guesses, adding parts to the hangman */

  if(arrayWordToBeGuessed.join(" ") === arrayUnderscore.join(" "))  {
    document.getElementById('Winner').innerHTML = 'You Won!'
  }

  switch(wrongGuesses)    {
    case 1:
        document.getElementById('ground').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 1";
        break
    case 2:
        document.getElementById('verticalBar').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 2";
        break
    case 3:
        document.getElementById('latteralBar').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 3";
        break
    case 4:
        document.getElementById('rope').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 4";
        break
    case 5:
        document.getElementById('head').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 5";
        break
    case 6:
        document.getElementById('leftArm').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 6";
        break
    case 7:
        document.getElementById('rightArm').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 7";
        break
    case 8:
        document.getElementById('body').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 8";
        break
    case 9:
        document.getElementById('leftLeg').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 9";
        break
    case 10:
        document.getElementById('rightLeg').style.display = 'inherit'
        document.getElementById('numberOfWrongTurns').innerHTML = "Number of wrong turns: 10";
        alert('Looser');
        break
}   

  // Empty the form
  document.getElementById('input').value = '';
}