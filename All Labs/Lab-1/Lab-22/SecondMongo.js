const express = require('express');
const mongoose = require('mongoose');
const Faculty = require('./Faculties');

mongoose.connect('mongodb+srv://virsodiyayash4:yash%408483@cluster0.kr9wp.mongodb.net/Lab_Test').then(() => {
    console.log('connect');

    const app = express();
    app.use(express.json());

    app.get('/' , async(req , res) => {
        const data = await Faculty.find();
        res.send(data);
    })

    app.get('/faculty' , async(req , res) => {
        const data = await Faculty.find();
        res.send(data);
    }) 

    app.get('/faculty/:name' , async(req , res) => {
        const data = await Faculty.findOne({name : req.params.name});
        res.send(data);
    })

    app.post('/faculty' , async(req , res) => {
        fac = new Faculty({...req.body});
        const ans = await fac.save();
        res.send(ans);
    })

    app.patch('/faculty/:name' , async(req , res) => {
        const fac = await Faculty.findOne({name : req.params.name});
        fac.name = req.body.name;
        const ans = await fac.save();
        res.send(ans);
    })

    app.delete('/faculty/:name' , async(req , res) => {
        const fac = await Faculty.deleteOne({name : req.params.name});
        res.send(fac);
    })

    app.listen(7000 , () => {
        console.log('server is started at 7000');
    })
})