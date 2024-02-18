//  Import required Modules
const express = require("express");
const multer = require("multer");
const path = require('path');

// Create Express app
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env file or default to 3000

// Set storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

// Initialize multer middleware for multiple file uploads
const upload = multer({ storage: storage }).array('files');

app.post('/', (req, res) => {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading
        return res.status(500).send(err.message);
      } else if (err) {
        // An unknown error occurred when uploading
        return res.status(500).send(err);
      }
  
      if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
  
      // Files uploaded successfully
      const uploadedFiles = req.files.map(file => file.filename);
      res.send(`Files uploaded successfully: ${uploadedFiles.join(', ')}`);
    });
  });
  
  // Serve uploaded files statically
  app.use('/', express.static('uploads'));
  

// app.get("/",(req,res)=>{
//     res.send("Welcome dude");
// })

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });