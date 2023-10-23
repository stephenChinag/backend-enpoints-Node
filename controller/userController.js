const DUMMY_PLACES = require("../model/dummy_data");
const DUMMY_USERS = require("../model/dummy_user");
const httpError = require("../model/http-error");

// get Places by Use ID
exports.getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });
  if (!place || place.length === 0) {
    throw new httpError("Could not find a place for the provided Id", 404);
  }
  res.json({ place });
};

exports.getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

exports.postLogin = (req, res, next) => {};

exports.postSignUp = (req, res, next) => {};
