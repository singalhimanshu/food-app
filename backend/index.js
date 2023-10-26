const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error!"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.use("/api/meals", require("./routes/mealRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
