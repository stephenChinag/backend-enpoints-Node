const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const placeRouter = require("./routes/places-route");
const userRouter = require("./routes/users-route");

app.use("/api/places", placeRouter);

app.use("/user", userRouter);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An Unknown error Occured !!" });
});

app.listen(3000);
