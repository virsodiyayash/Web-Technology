const fs = require("fs");

const file = "..\Lab-17\Path.js";
const Demo = "E:\Yash-1\Lab-17\Demo.js";

fs.readFile('..\Lab-17\Path.js' , (error , data) => {

    if(error){
        throw error;
    }

    fs.writeFile('Demo.js' , data.toString() ,(err) => {
        console.log("File has been saved");
    })
});