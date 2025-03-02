const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authController = require("../controllers/user.controller");


router.post("/login", authController.login);

module.exports = router;
