let arr = [1, 3, 4, 6, 5];

arr.forEach((value ) => {
    console.log(value * value);
});

let calcSquare = (value) => {
    console.log(value * value);
};

arr.forEach(calcSquare);