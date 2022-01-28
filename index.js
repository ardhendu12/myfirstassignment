const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const API = require("./multerAPI");

dotenv.config();



const port = process.env.PORT || 4000;

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log("Database connection has been established successfully......!!!!!")
);

// Import routes
const productRoutes = require("./routes/product");

// Middleware
app.use(express.json());
app.use(cors());

// route Middleware
app.use("/api/products", productRoutes);


app.listen(port, () => console.log(`Server is  Up and Running at port ${port}!!!!!`));