const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const placeRouter = require("./routes/places-route");
const userRouter = require("./routes/users-route");
const httpError = require("./model/http-error");
// bodyParser parsing to jsonData
// what does bodyParser.json do? this will parse any incoming request body and extract any json data which is in there
// convert it to regular javaScript data Structurs like Object and Arrays and then call next automatically and also add jason data
app.use(bodyParser.json());

app.use("/api/places", placeRouter);

app.use("/api/places/user", userRouter);

// handling incorrect route middleware
app.use((req, res, next) => {
  throw new httpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An Unknown error Occured !!" });
});

app.listen(3000);
