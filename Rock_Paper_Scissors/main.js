// Rock, paper, scissors game

function getUserChoice(userInput) {
  // function to collect user input for game
  userInput = userInput.toLowerCase();
  if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Please enter a valid option'
  }
}

function getComputerChoice() {
  // randomly select computer option
  var ranNum = Math.floor(Math.random() * 3)
  if (ranNum === 0) {
    return 'paper'
  } else if (ranNum === 1) {
    return 'rock'
  } else {
    return 'scissors'
  }
}

function checkWinner(userChoice, computerChoice) {
  // game logic for wins and loses
  if (userChoice === computerChoice) {
    return 'Tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper beats Rock, User Loses'
    } else {
      return 'Rock beats Scissors, User wins'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'Paper beats Rock, User Wins'
    } else {
      return 'Scissors beats Paper, User Loses'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Rock beats Scissors, User Loses'
    } else {
      return 'Scissors beats Paper, User Wins'
    }
  }
}

function playGame () {
  var promptChoice = window.prompt('Choose Paper, Rock or Scissors: ')
  var userChoice = getUserChoice(promptChoice)
  var computerChoice = getComputerChoice()
  console.log('Player selects: ', userChoice)
  console.log('Computer selects: ', computerChoice)
  console.log(checkWinner(userChoice, computerChoice))
}

playGame()
