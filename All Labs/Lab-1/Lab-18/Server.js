const http = require('http');

const server = http.createServer((req , res) => {
    // res.end("Hello World");
    // console.log(req.url);

    if(req.url == '/abc'){
        res.end("Hello abc");
    }

    else{
        res.end("Hello world");
    }
})

const port = 5000;

server.listen(5000 , () => {
    console.log("Your port number is = "+port);
});