require("dotenv").config
const express = require ("express");
const cors =require("cors");
const path = require("path");



const port = process.env.PORT || 3001;
const app = express();
//creating middleware
app.use(express.json);
app.use(cors())

// if(process.env.NODE_ENV === "production")
// app.use(express.static("../client/build"))
// app.get("*",(req,res)=>(
//     res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
// ))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, console.log(`server listenrning to port 3001`))