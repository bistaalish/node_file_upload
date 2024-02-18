//  Import required Modules
const express = require("express");
const multer = require("multer");
const path = require('path');

// Create Express app
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env file or default to 3000

app.get("/",(req,res)=>{
    res.send("Welcome dude");
})

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });