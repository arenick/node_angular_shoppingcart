"use strict";

const express = require("express");
const app = express();
const list = require('./routes/routes');
const port = 5000;

app.use(express.json());
app.use("/", list);
app.use(express.static('./public'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});