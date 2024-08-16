let num1 = ["one" , "two" , "three", "four" , "five", "six", "seven", "eight" , "nine"];
let num2 = ["ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" , "eighteen" , "nineteen"];
let num3 = ["twenty" , "thirty" , "fourty" , "fifty" , "sixty" , "seventy" , "eighty" , "ninety"];

let result = "";

let n = prompt("Enter the number between 100 and 999 : ");

if(n >= 100){
    result = result + num1[Math.floor((n/100) - 1)] + " Hundred " ;
    n = n%100;
}
if(n >= 20){
    result = result + num3[Math.floor((n/10) - 2)] + " ";
    n = n%10;
}
if(n >= 10){
    result = result + num2[Math.floor((n/10) - 1)] + " ";
}

else{
    result = result + num1[Math.floor(n - 1)] + " ";
    n = n / 10;
}

        alert(result);
