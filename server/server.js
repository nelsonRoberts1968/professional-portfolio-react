require("dotenv").config
const express = require ("express");
const cors =require("cors");
const path = require("path");

const app = express();
//creating middleware
app.use(express.json);
app.use(cors())

if(process.env.NODE_ENV === "production")
app.use(express.static("../client/build"))
app.get("*",(req,res)=>(
    res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
))

const port = process.env.PORT || 3001;
app.listen(port, console.log(`server listenrning to port 3001`))