const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
require("dotenv/config");

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("Connected to Database!!!");
  })
  .catch((e) => {
    console.log(e);
  });

const VehicleRoute = require('./routes/vechicle');

app.use(cors()) 
app.use(express.json());

app.use("/api/vehicle", VehicleRoute);


app.listen(5000,()=>{
    console.log("listening on the port: 5000");
})