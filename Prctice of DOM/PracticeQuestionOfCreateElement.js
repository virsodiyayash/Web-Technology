// ---------------------------question no 1-----------------------

let newBtn = document.createElement('button');
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);



// ------------------------------question no 2-----------------------

let para = document.querySelector("p");

console.log(para);


// If you apply get attribute and set attribute it can change the the old class value and apply new class value


// para.getAtrribute("class");
// para.setAttribute("class" , "newClass");

para.classList.add("newClass");