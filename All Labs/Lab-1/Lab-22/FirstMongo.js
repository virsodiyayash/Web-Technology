const express = require("express");
const mongoose = require("mongoose");
const Student = require('./Students');

mongoose.connect('mongodb+srv://:@cluster0.kr9wp.mongodb.net/Lab_Test').then(() => {
    console.log('connect');

    const app = express();
    app.use(express.json());

    app.get('/' , async(req , res) => {
        const data = await Student.find();
        res.send(data);
    });

    app.get('/student' , async(req , res) => {
        const data = await Student.find();
        res.send(data);
    });

    app.get('/student/:name' , async(req , res) => {
        const data = await Student.findOne({name : req.params.name});
        res.send(data);
    });

    app.post('/student' , async(req , res) => {
        stu = new Student({...req.body});
        console.log(stu);
        const ans = await stu.save();
        res.send(ans);
    });

    app.patch('/student/:name' , async(req , res) => {
        const stu = await Student.findOne({name : req.params.name});
        stu.name = req.body.name;
        const ans = await stu.save();
        res.send(ans);
    })

    app.delete('/student/:name' , async(req , res) => {
        const stu = await Student.deleteOne({name : req.params.name});
        res.send(stu);
    })

    app.listen(3000 , () => {
        console.log('Server started at port 3000');
    });
})

