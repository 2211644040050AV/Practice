const express = require('express');
const cors = require('cors');

require('dotenv').config(); // Load environment variables
require('./Models/db'); // Initialize database

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(cors()); // Allow cross-origin requests

// Routes (add your routes here)
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
