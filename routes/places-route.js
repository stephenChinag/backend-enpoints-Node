const express = require("express");

const router = express.Router();
const placeControl = require("../controller/placeController");
//40.748817, -73.985428.

router.get("/:pid", placeControl.getPlaces);

router.post("/", placeControl.creatPlace);

router.patch("/:pid", placeControl.updatePlace);

router.delete("/:pid", placeControl.deletePlace);

router.get("/:uid", placeControl.getPlacesByUserId);
module.exports = router;
