const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const placeRouter = require("./routes/places-route");

app.use("/api/places", placeRouter);

app.listen(3000);
