// Make sure JavaScript is running.
console.log("Up and running!");

//Create an array cards.
//The array should hold four strings - one for each of our cards.
//The strings should be "queen", "queen", "king", and "king".
const cards = ["queen", "queen", "king", "king"];

//Create an array cardsInPlay.
//Set its value to an empty array []
let cardsInPlay = [];

// Create a variable cardOne.
// Store the first item in the cards array in the variable cardOne.
var cardOne = cards[0];

//Now create a variable to represent the second card that the user 
//flipped.
var cardTwo = cards[1];

/* Use the push() method to add cardOne 
to the end of the cardsInPlay array. */

/*Use the push() method to add cardTwo 
to the end of the cardsInPlay array.
*/
cardsInPlay.push(cardOne, cardTwo);

/* Use console.log() to display the cards 
that the user flipped. */
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

/* Write an if statement that checks to see if the length 
of the cardsInPlay array is 2. For the condition, you can 
use the length property to find out how many items are in 
the cardsInPlay array and then use the === operator to see 
if the length is equal to 2. */
if (cardsInPlay.length === 2) {

/* check to see if the first card in the cardsInPlay array 
cardsInPlay[0]) is equal to the second card in the cardsInPlay 
array. If values are equal, execute an alert with the message 
"You found a match!"*/
	if  (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
//If values are not equal, execute an alert with the message 
//"Sorry, try again."
	} else {
		 alert("Sorry, try again.")
	}
	}

