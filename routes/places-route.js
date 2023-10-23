const express = require("express");

const router = express.Router();
const placeControl = require("../controller/placeController");
//40.748817, -73.985428.

router.get("/:pid", placeControl.getPlaces);

module.exports = router;
