const DUMMY_PLACES = require("../model/dummy_data");
const httpError = require("../model/http-error");
exports.getUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    throw new httpError("Could not find a place for the provided Id", 404);
  }
  res.json({ place });
};
