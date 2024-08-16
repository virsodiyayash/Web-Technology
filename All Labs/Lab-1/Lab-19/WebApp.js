const express = require('express');
const fs = require('fs');

const app = express();

app.get('/' , (req , res) => {
    fs.readFile('Home.txt' , (err , data) => {
        res.send(data.toString());
        // if(err){
        //     res.send("File Not Found");
        // }
        // else{
        //     res.send(data.toString());
        // }
    })
})

app.get('/about' , (req , res) => {
    fs.readFile('about.txt' , (err , data) => {
        res.send(data.toString());
        // if(err){
        //     res.send("File Not Found");
        // }
        // else{
        //     res.send(data.toString());
        // }
    })
})

app.get('/contact' , (req , res) => {
    fs.readFile('contact.txt' , (err , data) => {
        res.send(data.toString());
        // if(err){
        //     res.send("File Not Found");
        // }
        // else{
        //     res.send(data.toString());
        // }
    })
})

app.get('/service' , (req , res) => {
    fs.readFile('service.txt' , (err , data) => {
        res.send(data.toString());
        // if(err){
        //     res.send("File Not Found");
        // }
        // else{
        //     res.send(data.toString());
        // }
    })
})

app.listen(3500 , () => {
    console.log("Hey, I am port number",3500);
})