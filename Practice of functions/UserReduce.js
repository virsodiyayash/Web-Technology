let num = prompt("Enter the value of an array you want");

let arr = [];

for(let i = 1 ; i <= num ; i++){
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((prev , curr) =>{
    return prev + curr;
});

console.log(sum);

let result = arr.reduce((prev , curr) =>{
    return prev * curr;
});

console.log(result);


