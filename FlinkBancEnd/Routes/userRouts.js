const express = require("express");
const AuthController = require("../Controllers/AuthController");

const router = express.Router();
const auth = new AuthController();

router.post("/api/userRegister", auth.registerUser());
router.post("/api/userLogin", auth.userLogin());

module.exports = router;
