// USER CHOICE
let userPermission = false 
let userChoice = prompt('Choose Scissors, Rock or Paper')
while(true)
    if userChoice = (userChoice != 'Scissors || Rock || Paper'){
        userChoice = false
    } else {
        userChoice = true
    }

// COMPUTER CHOICE
    let computerChoice = Math.round(Math.random() * 3)
    If (computerChoice == 0) { 
        computerChoice = 'Scissors'
    } else if (computerChoice == 1) {
        computerChoice = 'Rock' 
    } else
        computerChoice = 'Paper' 
    

// THE WINNER 
If (userChoice == computer choice) {
    alert('It was a tie!')
} else if (userChoice == 'Scissors' && computerChoice == 'Rock') || (userChoice == 'Paper' && computerChoice == 'Scissors') {
    alert('The computer has won!') 
} else userChoice == 'Rock' && computerChoice == 'Paper' {
    alert('You have won!')}
