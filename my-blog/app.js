const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import routes
const blogRoute = require('./routes/blog');
app.use('/', blogRoute);

// Set port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));