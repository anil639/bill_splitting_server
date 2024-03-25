import express from "express";
import mongoose from "mongoose";

import order from "./src/route/orderRoute.js";
import friend from "./src/route/friendRoute.js";

const app = express();
app.use(express.json());
//DB
mongoose
  .connect("mongodb://localhost:27017/billSplitting")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//Routes
app.use("/orders", order);
app.use("/friends", friend);

app.listen(8000, () => {
  console.log("app listning...");
});
