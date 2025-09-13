const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Pickleball API running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));