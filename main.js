let computer ;
let Player ;

let playerFinalChoice = prompt("What is your choice")
Player = playerFinalChoice ;

let computerChoice = Math.floor(Math.random() * 3) + 1 ;

function computerFinalChoice(choice){
    if (choice = 1 ) {
        computer = "rock"
    }
    else if (choice = 2 ) {
        computer = "paper"
    }
    else if (choice = 3 ) {
        computer = "scissors"
    }
    else {
        console.log("Computer can not decide")
    }

    return computer
}

function game(player , computer){
    if(player === computer){
        console.log('Tie') ;
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
           console.log("Player Lose")

        }else{
            console.log("Player Won")
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            console.log("You Lose")
        }else{
           console.log("You Won")
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log("You Won")
        }else{
            console.log("You Lose")
        }
    }
}

computerFinalChoice(computerChoice);
console.log("computer choose :" + computer)
console.log("you choose :" + Player);
game(Player , computer);