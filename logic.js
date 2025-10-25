let humanScore=0,computerScore=0;
function getComputerChoice(){
    let num=Math.random();
    if(num<1/3){
        return "rock";
    }
    else if(num<2/3) { 
        return "paper";
    }
    else return "scissor";
}
function getHumanChoice(){
    let choice=prompt("Enter your choice from rock, paper or scissor");
    choice=choice.toLowerCase();
    return choice;
}
function playRound(computerChoice,humanChoice){
    if(computerChoice==humanChoice){
        console.log("Computer choice was also", computerChoice,", its a draw");
    }
    else if(computerChoice=="paper"){
        if(humanChoice=="rock"){
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else{
            console.log("You win! scissor beats paper");
            humanScore++;
        }
    }
     else if(computerChoice=="rock"){
        if(humanChoice=="scissor"){
            console.log("You lose! rock beats scissor");
            computerScore++;
        }
        else{
            console.log("You win! paper beats rock");
            humanScore++;
        }
    }
    else{
        if(humanChoice=="paper"){
            console.log("You lose! scissor beats paper");
            computerScore++;
        }
        else{
            console.log("You win! scissor beats paper");
            humanScore++;
        }
    }
}
function playGame(){
    for(let i=0;i<5;i++){
    playRound(getComputerChoice(),getHumanChoice());
    }
    if(humanScore>computerScore) console.log("Congrats!You won");
    else if(humanScore<computerScore) console.log("Oops! You lost ");
    else console.log("Well! Thats a draw");
}
playGame();