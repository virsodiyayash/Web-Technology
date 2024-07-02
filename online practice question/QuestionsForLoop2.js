let ComputerNumber = 25;

let UserNumber = prompt("Please Guess the number between 1 to 100");
console.log(UserNumber);

while(UserNumber != ComputerNumber) {
    UserNumber = prompt("You entered wrong number, Guess again");
}

console.log("Congratulations , You have entered the right number!");