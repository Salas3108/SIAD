const express = require('express');
const mongoose = require('mongoose');
const app = express();


const port = 3000 ; // Change this to the desired port number


// Add your database connection string here
const dbURI = 'mongodb+srv://username:azerty@cluster0.zt9u591.mongodb.net/?retryWrites=true&w=majority';

// Connect to the MongoDB Atlas database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Start the server once the database connection is established
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err);
  });
