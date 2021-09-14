const computerPlay= ()=>{
    //console.log("Hello");
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

const checkEnd=()=>{
    if(cc==5 || pc==5){

        const container=document.querySelector(".container");
        const resdiv=document.createElement("div");
        if(cc==5){
            resdiv.textContent="Max score reached, Computer wins!";
            resdiv.style.color="red";
        }
        else{
            resdiv.textContent="Max score reached, Player wins!";
            resdiv.style.color="green";
        }
        resdiv.classList.add("result");
        container.appendChild(resdiv);

        buttons.forEach(button=>button.removeEventListener('click',play));
    }
};

const play= e=>{

    
    const playerSelection=e.target.getAttribute("class");
     
    let computerSelection=computerPlay();

    const res=playRPS(computerSelection, playerSelection);

    const container=document.querySelector(".container");

    const resdiv=document.createElement("div");

    const resdiv1=document.createElement("div"); 
    resdiv1.textContent=`Computer choice:${computerSelection}`;
    resdiv1.style.color="red";

    const resdiv2=document.createElement("div"); 
    resdiv2.textContent=`${res}`;
    
    const resdiv3=document.createElement("div"); 
    resdiv3.textContent=`Computer score: ${cc} Player Score: ${pc}`;

    resdiv.classList.add("resbox");

    resdiv.appendChild(resdiv1);
    resdiv.appendChild(resdiv2);
    resdiv.appendChild(resdiv3);
    container.appendChild(resdiv);

    checkEnd();

};

let cc=0, pc=0;

const buttons=document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',play));

/*const element=document.getElementsByClassName("container");
element.scrollTop = element.scrollHeight*/

element.scrollIntoView(false);
