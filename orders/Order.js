import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerID: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  BookID: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  initialDate: {
    type: Date,
    require: true,
  },
  deliveryDate: {
    type: Date,
    require: true,
  },
});

export default mongoose.model("Book", orderSchema);
