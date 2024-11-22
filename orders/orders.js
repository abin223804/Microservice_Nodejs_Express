import express  from 'express';
import mongoose from 'mongoose';
import axios from 'axios'
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
    customerID:req.body.customerID,
    BookID:req.body.BookID,
    initialDate: req.body.initialDate,
    deliveryDate: req.body.deliveryDate
};

    const order = new Order(newOrder);
    order.save().then(() => res.json(order))
   .catch(err => res.status(400).json('Error: '+ err));
})



app.get("/orders",(req,res)=>{
  Order.find()
 .then((books) => res.json(books))
})


app.get("/order/:id",(req,res)=>{

Order.findById(req.params.id).then((order)=>{


  
  if(order){

    axios.get("http://localhost:3001/customer/" + order.customerID).then((response)=>{


      const orderObject = {customerName:response.data.name,bookTitle:''}

      axios.get("http://localhost:3000/books/" + order.BookID).then((response)=>{
        orderObject.bookTitle = response.data.title
        res.json(orderObject)
      })
      
    })

    

  }
  else{
     res.send("Invalid Order")
  }
 
})



})

// app.get("/order/:id", (req, res) => {
//   Order.findById(req.params.id)
//     .then((order) => {
//       if (!order) {
//         return res.status(404).json({ message: "Invalid Order" });
//       }

//       const customerRequest = axios.get(`http://localhost:3001/customer/${order.customerID}`);
//       const bookRequest = axios.get(`http://localhost:3000/books/${order.BookID}`);

//       Promise.all([customerRequest, bookRequest])
//         .then(([customerResponse, bookResponse]) => {
//           const orderObject = {
//             customerName: customerResponse.data.name,
//             bookTitle: bookResponse.data.title
//           };
//           res.json(orderObject);
//         })
//         .catch(error => {
//           res.status(500).json({ message: "Error fetching order details" });
//         });
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Error finding order" });
//     });
// });


app.listen(3002,()=>{
    console.log('Up and running on port 3002  - order_service');
})