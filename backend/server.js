const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 4500;

// Middleware
app.use(express.json());
app.use(cors()); // Add the cors middleware



// Database connection
mongoose.connect('mongodb://localhost:27017/project_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

const resourceRouter = require('./routes/resources')
app.use('/api/resources', resourceRouter)

// Home page route
app.get('/api', (req, res) => {
  res.send('Welcome To The Home page');
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    // Wait for the database connection before starting the server
    await mongoose.connection;
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
  }
});
