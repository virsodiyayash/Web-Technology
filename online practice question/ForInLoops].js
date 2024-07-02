let student = {
    name : "yash patel",
    age : 18,
    cgpa : 9.20,
    isPass : true,
};

for(let str in student) {
    console.log("key is = ",str ,"value is = ",student[str]);
}