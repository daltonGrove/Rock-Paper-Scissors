let hands = ["Rock", "Paper", "Scissors"];

let player = {
	name: "Player 1",
	hand: "",
	wins: 0
};

let player2 = {
	name: "Computer",
	hand: "",
	wins: 0
};

const rules = function(){
  let theRules = "The game `Rock Paper Scissors` is a simple choosing game. To start a round, each player selects only one either Rock, Paper, or Scissors. After selections have been made, they are revealed, and so is the winner. Scissor cuts Paper, Paper covers Rock, and Rock smashes Scissors. If both players select the same choice, it is a tie and no body wins. Usually the game is played best 2 out of 3 but endless rounds can be played. (Click 'Rules' again to hide these rules.)";

  const rulesInfo = document.getElementById("showTheRules").innerHTML;
  if(rulesInfo.length === 0){
    document.getElementById("showTheRules").innerHTML = theRules;
  } else {
    document.getElementById("showTheRules").innerHTML = null;
  }
};


const startGame = function(){
  document.getElementById("trigger").innerHTML = player.name + ", please select The ROCK, Toilet PAPER, or Edward SCISSOR Hands below to start the game:";
  let rpsImages =  document.getElementsByClassName("choices");
  if(rpsImages[0].style.visibility === "hidden"){
    rpsImages[0].style.visibility = "visible";
  } 
};

const compHand = function(){
  return hands[parseInt(Math.random()*10)%3];
};




/*
const getPlayer2Hand = function(){
	return hands[parseInt(Math.random()*10)%3]
};


let playRound = function(player,player2){
	player.hand = getHand();
	player2.hand = getPlayer2Hand();
	if (player.hand === player2.hand) {
		console.log("It is a draw! Nobody wins. Better luck next round")
		return null;
	} else if ((player.hand === "Rock" && player2.hand === "Scissors") ||
							(player.hand === "Paper" && player2.hand === "Rock") ||
							(player.hand === "Scissors" && player2.hand === "Paper")) {
		player.wins += 1;
		console.log(`Congrats ${player.name} you have won with ${player.hand} over the ${player2.name}\`s ${player2.hand}. It appears you are smarter than the ${player2.name}\`s AI`);
		return player;
	} else {player2.wins += 1;
	console.log(`The ${player2.name} wins with ${player2.hand} over the ${player.hand} that ${player.name} has played. Next time, think smarter not harder :)`);
	return player2;
	}
}; */









/* Makes the rules button display rules
const rules = function(){
	var learnRules = "Rules inserted here";
	const pageInfo = document.getElementById("theRules").innerHTML;
  if(pageInfo.length === 0){
    document.getElementById("theRules").innerHTML = learnRules;
  }
};
*/




