const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {

    res.setHeader('content-Type' , 'text/html');
    url = req.url;
    if(url == '/Home'){
        fs.readFile('Home.html' , (err , data) => {
           res.end(data);
        })
    }

    else if(url == '/about'){
        fs.readFile('about.html' , (err , data) => {
            res.end(data);
         })
    }

    else if(url == '/contact'){
        fs.readFile('contact.html' , (err , data) => {
            res.end(data);
         })
    }
    else{
        res.end("button");
    }
})

const port = 3000;

server.listen(3000 , () => {
    console.log("Your port is = "+port);
})