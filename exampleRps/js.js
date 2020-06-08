document.getElementById("rock".onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;

document.getElementById("scissors").onclick = play;


function user() {
	var userChoice = this.id;
	console.log ("You've chosen" + userChoice)
}

var computer = Math.random();
if (computer <0.34){
    computer = "rock";
}else if(computer <=0.67){
    computer = "paper";
}
else{
    computer = "scissors";
    console.log ("The Computer's Choice is: " + computer)
}


var winner = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
winner(user,computer);