# Number-Guesser

The Number Guesser Project is a simple, yet feature packed Javascript game, where a human competes based on their inputs against the computer to guess a randomly generated number from 0 - 9. Whoever guess is closest to the target number wins the round! Scores are tracked for both the human and the computer, and the game progresses through multiple rounds.

How Does The Program Work?

Generate Target Number: A random target number between 0 and 9 is generated at the start of each round.
Make Guesses: Both the human player and the computer make their guesses.
Compare Guesses: The guesses are compared to the target number, and the guess closest to the target wins.
Update Score: The winner's score is incremented by one.
Advance Round: The game progresses to the next round.

FUNCTIONS:

function generateTarget() {
 return Math.floor(Math.random() * 10);
}

Calculates the absolute distance between two numbers.

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

Game Variables:

humanScore: Tracks the human player's score.
computerScore: Tracks the computer's score.
currentRoundNumber: Tracks the current round number.
