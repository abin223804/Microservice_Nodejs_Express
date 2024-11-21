import express  from 'express';
import mongoose from 'mongoose';
import Order from './Order.js'
const app= express();

app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://abinschandran:roaihaFqdQNzRxGq@cluster0.xp1ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB! - orders");
  });


app.post("/order",(req, res) => {

    const newOrder = {
    customerID: req.body.customerID,
    BookID: req.body.BookID,
    initialDate:req.body.initialdate,
    deliveryDate:req.body.deliveryDate
    }

    const order = new Order(newOrder);
    order.save().then(() => res.json('Order created  with success!'))
   .catch(err => res.status(400).json('Error: '+ err));
})








app.listen(3002,()=>{
    console.log('Up and running on port 3002  - order_service');
})