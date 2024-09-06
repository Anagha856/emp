
var mongoose =require('mongoose')

mongoose.connect('mongodb+srv://mohananagha92:anagha@cluster0.ccnmc.mongodb.net/day3?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("db connected")

})
.catch((err)=>{
    console.log(err)
})

