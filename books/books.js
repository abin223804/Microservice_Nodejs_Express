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

    const newBook ={
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher,
    }
  const book = new Book(newBook);

  book.save().then(()=>{

    res.json(book);
    console.log("New book created successfully");
    
  }).catch((err)=>{
    if(err){
        throw err;
    }
  })

})
app.listen(3000,()=>{
    console.log("Server is running  ! -- This is our Book service!");
    
})  
