let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let port = process.env.PORT || 4000;
let mongoose = require("mongoose");
let productRoutes = require("./routes/productRoutes").productRoutes;
let url = process.env.mongo_url || "mongodb://localhost:27017/meanstack";

mongoose.connect(url, (err) => {
    if (err) console.log(err);
    else console.log("Mongo connected successfully");
})

app.use(bodyParser.json());
app.use(cors());
app.use("/products", productRoutes);

app.listen(port, (err) => {
    console.log("Server listening at port : ", port);
})
