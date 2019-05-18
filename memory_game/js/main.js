// Make sure JavaScript is running.
console.log("Up and running!");

/*Create an array cards.
The array should hold four strings - one for each of our cards.
The strings should be "queen", "queen", "king", and "king".*/
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//Create an array cardsInPlay.
//Set its value to an empty array []
var cardsInPlay = [];

//function called createBoard will create a new game board.
var createBoard = function() {

	//loop through the cards array.
	for (var i = 0; i < cards.length; i++) {

		/*For each card, use createElement to create an img 
		element and store it in a variable cardElement.*/
		var cardElement = document.createElement('img');

		/*Still in the loop, use the setAttribute() method 
		on cardElement. We want to add a src attribute of 
		"images/back.png". Now, the user will see the back 
		of the card.*/
		cardElement.setAttribute('src','images/back.png');

		/*Set the card's 'data-id' attribute to be the current 
		index of the card array, i (no quotes). Now, we can 
		track which card it is. NOTE: data- attributes are meant 
		to store data about an element that is not tied to a style.*/
		cardElement.setAttribute('data-id', i);

		/*Next, use the addEventListener() method on the cardElement. 
		Add a click event so that when a user clicks on a card, the 
		flipCard function is called.*/
		cardElement.addEventListener('click', flipCard);

		/*As the last piece of the for loop, append the cardElement 
		to the game board (which has an id of game-board*/
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Check for match function.
var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
	}
}


var flipCard = function() {

	/* use the getAttribute method to get the data-id attribute 
	of the card that was just clicked and store it in a variable 
	cardId.*/
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);

	if (cardsInPlay.length >= 2) {
		cardsInPlay = [];
	}


	/*Use the push method to add the card that the user flipped 
	(cards[cardId]) to the cardsInPlay array.*/
	cardsInPlay.push(cards[cardId]);

	/*use the setAttribute method to update the src attribute to the 
	image of the card that was just clicked (the image source is in 
	the cardImage property in that card's object in the cards array).*/
	this.setAttribute('src',cards[cardId].cardImage);


	//Call checkForMatch function.
	if (cardsInPlay.length === 2) {
	checkForMatch(); 
}
};

var reset = function () {
	for (var i = 0; i <cards.length; i++) {
		document.getElementByTagName('img')[i].setAttribute('src', 'images/back.png');
	} 
		cardsInPlay = []
	}


createBoard();

