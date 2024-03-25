import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [String],
  totalAmount: Number,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "Friend" }],
});

export default mongoose.model("Order", orderSchema);
