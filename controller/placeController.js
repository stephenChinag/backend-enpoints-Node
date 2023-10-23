const DUMMY_PLACES = require("../model/dummy_data");

exports.getPlaces = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    const error = new Error("Could not Find a place for the provided Id");
    error.code = 400;
    throw error;
  }
  console.log(placeId);
  console.log("GET req of places");
  res.json({ place });
};
