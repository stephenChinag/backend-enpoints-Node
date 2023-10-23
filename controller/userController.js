const DUMMY_PLACES = require("../model/dummy_data");

exports.getUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    //const err = Error(" Place not found");
    return res
      .status(404)
      .json({ message: "Could not find a place for a provided Id" });
  }
  res.json({ message: `the User id is ${userId}`, place });
};
