let nums = [13, 34, 57, 89];

nums.map((val) => {
    console.log(val);
})

let newArr = nums.map((val) => {
    return val * 2;
})

console.log(newArr);