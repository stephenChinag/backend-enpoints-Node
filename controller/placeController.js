let DUMMY_PLACES = require("../model/dummy_data");
const httpError = require("../model/http-error");
//const uuid = require("uuid/dist/v4");
//import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require("uuid");

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
// Get places
exports.getPlaces = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    throw new httpError("Could not Find a place for the provided id.", 404);
  }

  console.log("GET req of places");
  res.json({ place });
};

//
exports.creatPlace = (req, res, next) => {
  //using uject destructuring that is also avoid using multiple
  // const title = req.body.title
  const { title, description, coordinates, address, creator } = req.body;
  const createPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createPlace);

  res.status(201).json({ place: createPlace });
};

//update place by id

exports.updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({
    place: updatedPlace,
  });
};

//DELETE single place by Id

exports.deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted Place" });
};
