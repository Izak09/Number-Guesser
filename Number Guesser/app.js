let humanScore = 0;
let computerScore = 0;

let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

function compareGuesses(humanGuess, computerGuess, target) {
  const humanDifference = getAbsoluteDistance(humanGuess, target);
  const computerDifference = getAbsoluteDistance(computerGuess, target);
  
  return humanDifference <= computerDifference;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

function validateUserGuess(humanGuess) {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range. Please enter a number between 0 and 9.');
  }
}

const target = generateTarget();
console.log(`Generated Target: ${target}`);

const humanGuess = 9;
const computerGuess = 8;

console.log(`Target: ${target}`);
console.log(`Human Guess: ${humanGuess}`);
console.log(`Computer Guess: ${computerGuess}`);
console.log(`Human Wins: ${compareGuesses(humanGuess, computerGuess, target)}`);

const winner = compareGuesses(humanGuess, computerGuess, target) ? 'human' : 'computer';
updateScore(winner);

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

console.log(`Current Round: ${currentRoundNumber}`);
advanceRound();
console.log(`New Round: ${currentRoundNumber}`);

const invalidHumanGuess = 12; 
validateUserGuess(invalidHumanGuess); 
