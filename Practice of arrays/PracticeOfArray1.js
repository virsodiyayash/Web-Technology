let marks = [85, 97, 44, 37, 76, 60];
let sum = 0 ;
let divide = marks.length;

for(let i = 0 ; i < marks.length ; i++) {
    sum = sum + marks[i];
}

console.log(sum/divide);