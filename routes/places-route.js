const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const placeControl = require("../controller/placeController");
//40.748817, -73.985428.

router.get("/:pid", placeControl.getPlaces);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placeControl.creatPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placeControl.updatePlace
);

router.delete("/:pid", placeControl.deletePlace);

router.get("/:uid", placeControl.getPlacesByUserId);
module.exports = router;
