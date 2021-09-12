const computerPlay= ()=>{
    console.log("Hello");
    let choices=["rock","paper","scissors"];
    let pos=parseInt(Math.random()*3);
    return choices[pos];
}

const playRPS=(computerSelection, playerSelection)=>{
    switch(playerSelection){
        case "rock" :
            if(computerSelection==="paper"){
                cc++;
                return"You lose! Paper beats Rock";
            }
            else if(computerSelection==="scissors"){
                pc++;
                return "You win! Rock beats Scissors";
            }
            else return "It's a draw";
        case "scissors": 
            if(computerSelection==="paper"){
                pc++;
                return "You win! Scissors beats Paper";
            } 
            else if(computerSelection==="scissors") return "It's a draw";
            else{
                cc++;
                return "You lose! Rock beats Scissors";
            }
        case "paper":
            if(computerSelection==="paper") return "It's a draw";
            else if(computerSelection==="scissors"){
                cc++;
                return "You lose! Scissors beats Paper";
            }
            else{
                pc++;
                return "You win! Paper beats Rock";
            }
        default : return "Unknown entry- Choose rock/paper/scissors";
    }
}

const game=()=>{
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Enter an option- rock/paper/scissors");
        playerSelection=playerSelection.toLowerCase();
        let computerSelection=computerPlay();
        console.log("Computer choice:",computerSelection);
        console.log(playRPS(computerSelection,playerSelection));
    }
}

let pc=0, cc=0;
game();
console.log("Final Scores: User: "+pc+" Computer: "+cc);
if(pc>cc) console.log("You win");
else console.log("You lose");

