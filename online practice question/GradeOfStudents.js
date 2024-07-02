let ans = prompt("Enter the number of marks of a student out of 100 = ");

if(ans >= 90 && ans <= 100 ){
    console.log("Division A");
}
else if(ans >= 70 && ans <= 89){
    console.log("Division B");
}
else if(ans >= 60 && ans <= 69){
    console.log("Division C");
}
else if(ans >= 50 && ans <= 59){
    console.log("Division D");
}
else{
    console.log("Division E");
}