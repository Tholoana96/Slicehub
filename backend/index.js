require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  "/images/pizzas",
  express.static(path.join(__dirname, "../src/images/pizzas"))
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/users", require("./routes/users"));
app.use("/api/pizzas", require("./routes/pizzas"));
app.use("/api/orders", require("./routes/orders"));

app.get("/", (req, res) => {
  res.send("Welcome to the SliceHub API");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
