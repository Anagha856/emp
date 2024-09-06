// 1.importing express and put it into a variable
const express =require('express')
require("./connection")
// import corsimport axios from 'axios';
// const apps=new cors()
// 3.Api creation
app.get('/',(req,res)=>{
    res.send("message from the server")

})
app.get('/trial',(req,res)=>{
    res.send("trial server")
})
app.post('/add',async(req,res)=>{
    try{
        await employeeModel(req.body).save();
        res.send({message:"data added!!"})
    }catch(error){
        console.log(error)
    }
})
// view Api
app.get('/view',async(req,res)=>{
    try {      
        var data = await employeeModel.find();
        res.send(data);
    } catch (error) {
        console.log(error)
        
    }
})
// delete
app.delete("/remove/:id",async(req,res)=>{
    try{
        await employeeModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted!!"})
    } catch(error){
        console.log(error)


    }
})
// update
app.put("/edit/:id",async(req,res)=>{
    try {
        var data=await employeeModel.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:'updated sucessfully',data})
        
    } catch (error) {
        console.log(error)
        
    }
})
   

// 4.port
app.listen(3004,()=>{
    console.log("port is running");

})