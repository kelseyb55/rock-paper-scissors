const getUserChoice = function (userInput){
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
      } else {
        console.log('Entry Error');
    }
    }

       
var getComputerChoice = function () {
     var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};

var determineWinner = function (userChoice, computerChoice) {


    if (userChoice === 'bomb'){
        return 'User Won';
    }

    if (userChoice === computerChoice ) {
        return 'Tie Game';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won';
        }

        if (computerChoice === 'scissors'){
            return 'User Won';
        }
    }


    if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
        return 'Computer Won';
    }

    if (computerChoice === 'rock') {
        return 'User Won';
    }
  }
 
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return 'Computer Won';

    }
    if (computerChoice === 'paper') {
        return 'User Won';
    }
   }
};

var playGame = function (){
 var userChoice = getUserChoice('scissors');
 var computerChoice = getComputerChoice();

 console.log('User Choice', userChoice);
 console.log('Computer Choice', computerChoice);

 var winner = determineWinner(userChoice, computerChoice);
 console.log(winner);

};

playGame();
