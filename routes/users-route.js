const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const usersController = require("../controller/userController");

router.get("/", usersController.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  usersController.postSignUp
);

router.post("/login", usersController.postLogin);

module.exports = router;
