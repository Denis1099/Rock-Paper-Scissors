/// a function for getting the computers choice in the game
const getComputerChoice = () => {
    let randomnum = Math.floor(Math.random() * 3);
    if(randomnum === 0){
        return "rock";
    } else if(randomnum === 1){
        return "scissors";
    } else if (randomnum === 2){
        return "paper";
    }
};

const getHumanChoice = (e) => {
    const sign = e.target.id; 
    return sign;
}
    let humanScore = 0;
    let robotScore = 0;
/// a function which decides who wins in the round
const playRound = (humanChoice, computerChoice) => {
    const roundResults = document.querySelector('#roundResults');
    let humanScoreDisplay = document.querySelector('#humanScoreDisplay');
    let robotScoreDisplay = document.querySelector('#robotScoreDisplay');

      roundResults.textContent = "";
      if (humanChoice === computerChoice) {
          roundResults.textContent = "It's a tie!";
      } else if (humanChoice === "rock" && computerChoice === "paper") {
          roundResults.textContent = "You lose! Paper beats Rock.";
          robotScore += 1;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
          roundResults.textContent = "You lose! Scissors beats Paper.";
          robotScore += 1;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
          roundResults.textContent = "You lose! Rock beats Scissors.";
          robotScore += 1;
      } else {
          roundResults.textContent = "You win!";
          humanScore += 1;
      }
      if(humanScore === 5){
        alert("You won!");
        humanScore = 0;
        robotScore = 0;
      } else if(robotScore === 5){
        alert("You lost, try again");
        humanScore = 0;
        robotScore = 0;
      }
      humanScoreDisplay.textContent ="Your score:" +humanScore;
      robotScoreDisplay.textContent ="Opponent's score:" +robotScore;
      console.log(humanScore);
      console.log(robotScore);
};

const choiceBtn = document.querySelectorAll("button");

choiceBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const humanChoice = getHumanChoice(e);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
});

// goal: display the current score for human and robot, update the points each round
// 1. set both scores to 0, whenever someone wins a round add a point
// 
// 
// 
// 
// 

/// a rock, paper, scissors game to five rounds
// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;
//     for(let i=0; i<5;i++){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         let [humanScore1, computerScore1] = playRound(humanChoice, computerChoice);
//         humanScore += humanScore1;
//         computerScore += computerScore1;
        
//     }
//     return [computerScore, humanScore];
// }

// const result = playGame();
// console.log("Final scores:", result);

