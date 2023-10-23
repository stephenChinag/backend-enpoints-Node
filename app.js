const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const placeRouter = require("./routes/places-route");
const userRouter = require("./routes/users-route");

// bodyParser parsing to jsonData
// what does bodyParser.json do? this will parse any incoming request body and extract any json data which is in there
// convert it to regular javaScript data Structurs like Object and Arrays and then call next automatically and also add jason data
app.use(bodyParser.json());

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
