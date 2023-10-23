const DUMMY_PLACES = require("../model/dummy_data");

exports.getUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    const error = new Error("Something is Wrong with the user ID");
    error.code = 404;
    return next(error);
  }
  res.json({ place });
};
