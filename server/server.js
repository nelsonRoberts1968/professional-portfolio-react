const express = require ("express");
const cors =require("cors");
const path = require("path");
const db = require('./config/connection');
require("dotenv").config()


const PORT = process.env.PORT || 3001;
const app = express();
//creating middleware
app.use(express.json);
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });