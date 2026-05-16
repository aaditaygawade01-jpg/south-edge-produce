const express = require('express');
const cors = require('cors');
require('dotenv').config();

const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/enquiry', enquiryRoutes);

app.get('/', (req, res) => {
  res.send('South Edge Produce API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
