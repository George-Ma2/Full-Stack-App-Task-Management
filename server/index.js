const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));