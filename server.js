const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
// const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());


app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`);
});

