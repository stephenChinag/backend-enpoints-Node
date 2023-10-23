const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const placeRouter = require("./routes/places-route");
const userRouter = require("./routes/users-route");
app.use("/api/places", placeRouter);

app.use("/user", userRouter);

app.listen(3000);
