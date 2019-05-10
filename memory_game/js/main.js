// Make sure JavaScript is running.
console.log("Up and running!");

//Create an array cards.
//The array should hold four strings - one for each of our cards.
//The strings should be "queen", "queen", "king", and "king".
const cards = ["queen", "queen", "king", "king"];

//Create an array cardsInPlay.
//Set its value to an empty array []
let cardsInPlay = [];

//Check for match function.
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
	}
}

function flipCard(cardID) {

	/*	Within the flipCard function, add a console.log() statement 
	to display the card that was flipped over.
	We'll use the index number that is passed in when the flipCard 
	function is called to access this card from the cards array 
	like so: cards[cardId].The message that is logged in the console 
	should read "User flipped queen" or "User flipped king". */
	console.log("User flipped " + cards[cardID] + ".")


	//Use the push method to add the card that the user flipped 
	//(cards[cardId]) to the cardsInPlay array.
	cardsInPlay.push(cards[cardID]);

	//Call checkForMatch function.
	if (cardsInPlay.length === 2) {
	checkForMatch(); }

}

//Call the flipCard function, passing in 0 as an argument.
flipCard(0);

//Call the flipCard function again, passing in 2 as an argument.
flipCard(2);

