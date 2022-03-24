require("dotenv").config
const express = require ("express");
const cors =require("cors");
const path = require("path");
const timeout = require('connect-timeout');



const port = process.env.PORT || 3000;
const app = express();
//creating middleware
app.use(express.json);
app.use(cors())
// app.use(timeout(10));

if(process.env.NODE_ENV === "production")
app.use(express.static("../client/build"))
app.get("*",(req,res)=>(
    res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
))

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, console.log(`server listenrning to port 3000`))