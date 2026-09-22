
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    switch(getRandomInt(3)){
        case 0:
            return "rock"
        case 1:
            return  "paper"
        case 2:
            return  "scissors"
    }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function compare(PlayerChoice, ComputerChoice) {
    var result = (map[PlayerChoice] || {})[ComputerChoice] || "Invalid choice";
    
    if (result === "tie") {
        return { winner: 0, message: "It's a tie" };
    }
    if (result.startsWith(PlayerChoice) === true) {
        return { winner: 1, message: result };
    }
    return { winner: 2, message: result };
}

function handleClick(PlayerChoice){
    const playerSign = document.getElementById("playerSign");
    switch(PlayerChoice){
        case "rock":
            playerSign.textContent =  "✊";
            break
        case "paper":
            playerSign.textContent =  "✋";
            break
        case "scissors":
            playerSign.textContent = "✌️";
            break
    }
    const ComputerChoice = getComputerChoice();
        const computerSign = document.getElementById("computerSign");
        switch(ComputerChoice){
            case "rock":
                computerSign.textContent =  "✊";
                break
            case "paper":
                computerSign.textContent =  "✋";
                break
            case "scissors":
                computerSign.textContent = "✌️";
                break
        }  
        let result = compare(PlayerChoice, ComputerChoice)
        let playerScore = document.getElementById("playerScore");
        let computerScore = document.getElementById("computerScore");
        
        let scoreInfo = document.getElementById("scoreInfo");
        let scoreMessage = document.getElementById("scoreMessage")

        switch(result.winner){
            case 0:
                scoreInfo.textContent = "It's a tie";
                scoreMessage.textContent = `${capitalizeFirstLetter(PlayerChoice)} ties with ${ComputerChoice}`;
                break
            case 1:
                scoreInfo.textContent = "You won the round";
                scoreMessage.textContent = `${capitalizeFirstLetter(result.message)} ${ComputerChoice}`;
                PlayerPoints += 1;
                playerScore.textContent = `Player: ${PlayerPoints}`;
                    if (PlayerPoints >= 5){
                        endGame("Player")}
                break
            case 2:
                scoreInfo.textContent = "You lost the round";
                scoreMessage.textContent = `${capitalizeFirstLetter(result.message)} ${PlayerChoice}`;
                ComputerPoints += 1;
                computerScore.textContent = `Computer: ${ComputerPoints}`;
                    if (ComputerPoints >= 5){
                        endGame("Computer")}
                break
        }

    }

function endGame(winner){
    switch(winner){
        case "Player":
            alert("You won! Congratulations :)")
            reset()
            break
        case "Computer":
            alert("You lost. Try again?")
            reset()
            break
    }
}

function reset(){
    PlayerPoints = 0;
    ComputerPoints = 0;
    computerSign.textContent =  "❔";
    playerSign.textContent =  "❔";
    computerScore.textContent = `Computer: ${ComputerPoints}`;
    playerScore.textContent = `Player: ${PlayerPoints}`;
    scoreInfo.textContent = "Choose your weapon";
    scoreMessage.textContent = "First to score 5 points wins the game"
}

let PlayerPoints = 0
let ComputerPoints = 0
console.log(PlayerPoints)

let rockbtn = document.getElementById("rockbtn");
let paperbtn = document.getElementById("paperbtn");
let scissorsbtn = document.getElementById("scissorsbtn");


rockbtn.addEventListener('click', () => handleClick("rock"));
paperbtn.addEventListener('click', () => handleClick("paper"));
scissorsbtn.addEventListener('click', () => handleClick("scissors"));

const valid_answers = ["rock" , "paper" , "scissors"]
var map = {}



valid_answers.forEach(function(choice, i) {
map[choice] = {};
map[choice][choice] = "tie"
map[choice][valid_answers[(i+1)%3]] = valid_answers[(i+1)%3] + " beats"
map[choice][valid_answers[(i+2)%3]] = choice + " beats"
})

/*
for (let r = 0; r<1; r++){
    winner = PlayOneRound()
    if (winner == "player"){
        PlayerPoints += 1
    } else if (winner == "computer"){
        ComputerPoints += 1
    }
}

if (PlayerPoints > ComputerPoints){
    GameResult = "You win the game!"
} else if (ComputerPoints > PlayerPoints){
    GameResult = "The computer won the game!"
} else GameResult = "It's a tie!"

alert(GameResult)
*/