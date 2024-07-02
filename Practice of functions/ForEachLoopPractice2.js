let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printValue(value){
//     console.log(value);
// })


arr.forEach((val , idx , arr) => {
    console.log(val , idx , arr);
});

