const DUMMY_PLACES = require("../model/dummy_data");
const httpError = require("../model/http-error");

// Get places
exports.getPlaces = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    throw new httpError("Could not Find a place for the provided id.", 404);
  }
  console.log(placeId);
  console.log("GET req of places");
  res.json({ place });
};

//
exports.creatPlace = (req, res, next) => {
  //using uject destructuring that is also avoid using multiple
  // const title = req.body.title
  const { title, description, coordinates, address, creator } = req.body;
};
