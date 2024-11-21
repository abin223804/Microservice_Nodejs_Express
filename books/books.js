import express from 'express';
import mongoose from 'mongoose';

import Book from './Book.js';
const app = express();


app.use(express.json());


mongoose.connect("mongodb+srv://abinschandran:XPeTs1spqwqxQ2iG@cluster0.xpc7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB!");
});
app.get('/', (req, res) => {
res.send("This is the books service")
})

app.post('/books', (req, res) => {

    //create a book
console.log(req.body);


})
app.listen(3000,()=>{
    console.log("Server is running  ! -- This is our Book service!");
    
})  
