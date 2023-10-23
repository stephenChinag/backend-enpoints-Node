const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.get("/:uid", userController.getUserId);

module.exports = router;
