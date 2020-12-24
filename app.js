const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let corsOptions = {
    origin: "http://localhost:8081"
};

app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;