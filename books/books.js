import express from 'express';
const app = express();


app.get('/', (req, res) => {
res.send("This is the books service")
})
app.listen(3000,()=>{
    console.log("Server is running  ! -- This is our Book service!");
    
})  
