let fruits = ["Apple", "Banana", "Mango", "Papaya", "litchey", "watermelon", "lemon"];

// --------------------Push is always used to add items from the end of the array
// fruits.push("Orange" , "watermelon");

// -------------------------pop is always used to remove items from the end of the array
// fruits.pop();

console.log(fruits);

// --------------------// when you convert array to string an array always remain as array,----------------
//----------------------- it doesn't change an array 

// console.log(fruits.toString()); 

//---------------------- when you apply concat method of an array it joins multiple array & returns the result

// let food = ["chips", "bhaji", "dosa"];

// let khav = fruits.concat(food);

// console.log(khav);


//---------------------------- unshift method works as same as push but it adds items from start---------------------

// fruits.unshift("chips");
// console.log(fruits);

// ---------------------------shift method works as same as pop but it remove items from start---------------
// let value = fruits.shift();
// console.log(value);


//----------------------------slice and aplice both method can change an original array-----------------------
// console.log(fruits.slice(1,4));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2 , 2 , 101 ,102 , "yash");