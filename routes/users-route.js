const express = require("express");

const router = express.Router();

const usersController = require("../controller/userController");

router.get("/");

router.post("/signup", usersController.postSignUp);

router.post("/login", usersController.postLogin);

router.get("/:uid", usersController.getPlacesByUserId);

module.exports = router;
