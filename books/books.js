import express from 'express';
import mongoose from 'mongoose';
const app = express();


mongoose.connect("mongodb+srv://abinschandran:XPeTs1spqwqxQ2iG@cluster0.xpc7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB!");
});
app.get('/', (req, res) => {
res.send("This is the books service")
})
app.listen(3000,()=>{
    console.log("Server is running  ! -- This is our Book service!");
    
})  
