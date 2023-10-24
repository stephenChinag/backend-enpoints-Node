const DUMMY_USERS = require("../model/dummy_user");
const httpError = require("../model/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
// get Places by Use ID

exports.getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

exports.postSignUp = (req, res, next) => {
  const { name, email, password } = req.body;
  const error = validationResult(req);

  if (!error.isEmpty()) {
    throw new httpError("please use a valid inpute", 403);
  }
  const hasSignedUp = DUMMY_USERS.find((u) => u.email === email);
  if (hasSignedUp) {
    throw new httpError("email already exit", 409);
  }
  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new httpError("Invalid UserName Or Password", 404);
  }
  res.status(200).json({ message: "Successfully Logged IN" });
};
