const express = require("express");

const router = express.Router();

const usersController = require("../controller/userController");

router.get("/", usersController.getUsers);

router.post("/signup", usersController.postSignUp);

router.post("/login", usersController.postLogin);

module.exports = router;
