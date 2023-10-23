const express = require("express");

const router = express.Router();
const placeControl = require("../controller/placeController");

router.get("/", placeControl.getPlaces);

module.exports = router;
