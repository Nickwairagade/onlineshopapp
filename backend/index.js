const express = require("express");
const env = require("./config/envConfig");
const cors = require("cors");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

//Database connection
connect();
app.use(cors());

// Add Middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.json({msg: 'Welcome To OnlineShop'});
});

// User Route
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
});