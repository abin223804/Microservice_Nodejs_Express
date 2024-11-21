import mongoose from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Book", customerSchema);
