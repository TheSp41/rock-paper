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
// function getHumanChoice(){
//     let choice=prompt("Enter your choice from rock, paper or scissor");
//     choice=choice.toLowerCase();
//     return choice;
// }
function playRound(computerChoice,humanChoice){
    if(computerChoice==humanChoice){
        alert("Computer choice was also "+ computerChoice+", its a draw");
    }
    else if(computerChoice=="paper"){
        if(humanChoice=="rock"){
            alert("You lose! Paper beats rock");
            computerScore++;
        }
        else{
            alert("You win! scissor beats paper");
            humanScore++;
        }
    }
     else if(computerChoice=="rock"){
        if(humanChoice=="scissor"){
            alert("You lose! rock beats scissor");
            computerScore++;
        }
        else{
            alert("You win! paper beats rock");
            humanScore++;
        }
    }
    else{
        if(humanChoice=="paper"){
            alert("You lose! scissor beats paper");
            computerScore++;
        }
        else{
            alert("You win! scissor beats paper");
            humanScore++;
        }
    }
}

function playGame(){
    const rock=document.querySelector("#rock");
    const paper=document.querySelector("#paper");
    const scissor=document.querySelector("#scissor");
    rock.addEventListener("click",()=>playRound(getComputerChoice(),"rock"));
    paper.addEventListener("click",()=>playRound(getComputerChoice(),"paper"));
    scissor.addEventListener("click",()=>playRound(getComputerChoice(),"scissor"));
    
}
playGame();