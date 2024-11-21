import express  from 'express';
import mongoose from 'mongoose';
 import Customer from './Customer.js'

 

const app= express();
app.use(express.json());




mongoose
  .connect(
    "mongodb+srv://abinschandran:Ak0ZGm3kfaUROm2v@cluster0.m4ngc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB! - customer");
  });


//add customer

app.post("/customer",(req, res) => {


    const { name, address, age } = req.body;
    const newCustomer = { name, address, age };

    const customer = new Customer(newCustomer)

    customer.save()
   .then(() => res.json('Customer added!')).catch((err) => {

      if(err){
        res.status(400).json({ message: err.message })
      }
   })

})

//getCustomers---

app.get("/customers", (req, res) => {
    Customer.find()
   .then((customers) => {res.json(customers)
}).catch((err) =>{
    if(err){
        throw err;
    }
    })
})



//get with id--

app.get('/customer/:id', (req, res) => {
    Customer.findById(req.params.id)
       .then((customer) => {
            if (!customer) {
                return res.status(404).json({ message: "customer not found" });
            }
            res.json(customer);
        })
       .catch((err) => {
            if (err) {
                throw err;
            }
        }); 
})

//delete customer------------------------

app.delete('/customer/:id', (req, res) => {
    Customer.findByIdAndDelete(req.params.id)
       .then((customer) => {
        res.send("customer removed successfully")
            if (!customer) {
                return res.status(404).json({ message: "customer not found" });
            }
            res.json(customer);
        })
       .catch((err) => {
            if (err) {
                throw err;
            }
        });
})

app.listen(3001,()=>{
    console.log('Server is running on port 3001  -- This is  customers service');
})