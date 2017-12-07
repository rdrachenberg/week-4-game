// Global Variables
var globalHealth = Math.floor(Math.random() *101);
var globalHealth2 = Math.floor(Math.random() *101);
var globalHealth3 = Math.floor(Math.random() *101);
var gloabalPlayerHealth = Math.floor(Math.random() *101);


//Player scripts 
let player = {
	health: 100,
	power: 20,
	counterAttack: 20,
}

//Opponent scripts
let opponent = {
	health: 100,
	power: 20,
	counterAttack: 20,
}

let opponent2 = {
	health: (globalHealth2),
	power: 20,
	counterAttack: 20,
}

let opponent3 = {
	health: (globalHealth3),
	power: 20,
	counterAttack: 20,
}


//Additional Variables
let score2 = opponent.health;
let score3 = opponent2.health;
let score4 = opponent3.health;



const attack = () => {
	let attackButton = document.getElementById('attack-button');
	let restartbutton = document.getElementById('restart-button');
	let gameMessage = document.getElementById('game-message');

	let playerAttack = determineAttack(player.power);
	opponent.health -= playerAttack;
	printToScreen();

	if (isGameOver(opponent.health)) {
		gameMessage.innerText= "You Won The Fight"
		endGame("You Won The Fight");
		return;
	}

	attackButton.disabled = true;
	
	let opponentAttack = determineAttack(opponent.power);
		player.health -= opponentAttack;
		printToScreen();
	
	gameMessage.innerText = "Opponent hit: " + opponentAttack;


	setTimeout(() => {
				if (isGameOver(player.health)){
					gameMessage.innerText = "Opponent Won Fight"
					endGame("Opponent Won Fight");
					return;
				}
			attackButton.disabled = false;
	}, 500);


	
	document.getElementById('hits').innerText = "Your Hit: " + playerAttack;
	document.getElementById('score2').innerText = opponent.health;
	document.getElementById('score3').innerText = opponent2.health;
	document.getElementById('score4').innerText = opponent3.health;
}

const endGame = (message) => {
	document.getElementById('game-message').innerText = message;
	document.getElementById('attack-button').hidden = true;
	document.getElementById('restart-button').hidden = false;
}

const determineAttack = (power) => {
	return Math.floor(Math.random() *opponent.power);

}

const isGameOver = (health) => {
	return health <= 0;
}

const restart = () => {
	let attackButton = document.getElementById('attack-button');
	player.health = 100;
	opponent.health = 100;
	document.getElementById('game-message').innerText = "";
	attackButton.disabled = false;
	attackButton.hidden = false;
	document.getElementById('restart-button').hidden = true;
	printToScreen();
}

const printToScreen = () => {
	document.getElementById('opponent-health').innerText = opponent.health;

	document.getElementById('player-health').innerText = player.health;

	document.getElementById('score').innerText = player.health;

	document.getElementById('score2').innerText = opponent.health;

	document.getElementById('score3').innerText = opponent2.health;

	document.getElementById('score4').innerText = opponent3.health;
	
}

printToScreen();

