const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {

    let file = "";

    if(req.url == '/snake'){
       file = '../Extra/sname.html';
    }

    else if(req.url == '/TTT'){
        file = '../../java script projects/NEW TIC TAC TOE/New/index.html';
    }

    fs.readFile(file , (err , data) => {
        if(err){
            res.end("error is thrown");
        }

        else{
            res.end(data.toString());
        }
    })

})

const port = 3633;

server.listen(port , () => {
    console.log("Your port is = "+port);
})