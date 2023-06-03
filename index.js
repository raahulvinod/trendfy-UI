const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const authRoutes = require('./routes/authRoutes');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
