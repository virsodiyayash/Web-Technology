const express = require("express");

const app = express();

app.get('/' , (req , res) => {
    res.send("Hello World From Home Page");
}); 

app.get('/about' , (req , res) => {
    res.send("Hello world from about page");
});

app.get('/contact' , (req , res) => {
    res.send("Hello world from contact page");
});

app.get('/service' , (req , res) => {
    res.send("Hello world from service page");
})

app.listen(3000 , () => {
    console.log("Hello i am port number ",3000);
})