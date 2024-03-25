import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.model("Friend", friendSchema);
