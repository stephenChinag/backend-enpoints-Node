const DUMMY_PLACES = require("../model/dummy_data");

exports.getPlaces = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    return res
      .status(404)
      .json({ message: "Could not find a place for a provided Id" });
  }
  console.log(placeId);
  console.log("GET req of places");
  res.json({ place });
};
