// 1.importing the express
const express = require('express')
const employeeModel = require('./model')

// 2.Initialize express
const app = new express()

// 3.middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 3.API creation
app.get("/",(req,res)=> {
    res.send("message from server")
})

app.get('/trial',(req,res)=>{
    res.send("message from trial api")
})

app.get('/data',(req,res)=>{
    res.json({"name":"abhinay","age":20})
})

app.post('/postdata',(req,res)=>{
    console.lod(req.body)
    res,send("data added")
})

//api to add data to db
app.post('/add',(req,res)=>{
    const result = new employeeModel(req.body);
    result.save();
    res.send("data added")
})
//api to view data from db
app.post('/view',async(req,res)=>{
    let result =await employeeModel.find();
    res.json(result);
})











// 4.port
app.listen(8080,()=>{
    console.log("Port 8080 is up and running")
})