const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server start in PORT ${PORT}`));
