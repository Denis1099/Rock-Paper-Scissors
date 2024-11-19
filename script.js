const getComputerChoice = () => {
    let randomnum = Math.floor(Math.random() * 3);
    if(randomnum === 0){
        return "Rock";
    } else if(randomnum === 1){
        return "Scissors";
    } else if (randomnum === 2){
        return "Paper";
    }
};

const getHumanChoice = () => {
    const sign = prompt("Rock, Paper or Scissors?"); 
    return sign.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return [0, 0];
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock.");
        return [0, 1];
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        return [0, 1];
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors.");
        return [0, 1];
    } else {
        console.log("You win!");
        return [1, 0];
    }
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i=0; i<5;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let [humanScore1, computerScore1] = playRound(humanChoice, computerChoice);
        humanScore += humanScore1;
        computerScore += computerScore1;
        
    }
    return [computerScore, humanScore];
}

const result = playGame();
console.log("Final scores:", result);