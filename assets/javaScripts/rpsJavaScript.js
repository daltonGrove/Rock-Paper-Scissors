let player = {
	name: "",
	hand: "",
	wins: 0
};

let comp = {
	name: "Computer",
	hand: "",
	wins: 0
};

let hands = ["Rock", "Paper", "Scissors"]

const rulesHistory = function(){
	var learnRules = "These are the rules";
	const pageInfo = document.getElementById("theRules").innerHTML;
  if(pageInfo.length === 0){
    document.getElementById("theRules").innerHTML = learnRules;
  } 
};


