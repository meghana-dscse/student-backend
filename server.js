const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/students');

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cors());

// API Routes
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 10000;
const HOST = process.env.HOST || '0.0.0.0';
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
  console.log(Server running on http://${HOST}:${PORT});
});
  })
  .catch((err) => console.log(err));
