const express = require("express");
const router = express.Router();
const authController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth"); // Login check middleware

// =====================
// Public Routes
// =====================

// Login page
router.get("/login", authController.loginPage);
// Login POST
router.post("/login", authController.login);

// Signup page
router.get("/signup", authController.signupPage);
// Signup POST
router.post("/signup", authController.signup);

// =====================
// Protected Routes
// =====================

// Home page (blogs) - only logged in users
router.get("/", isAuthenticated, authController.homePage);

// Profile page
router.get("/profile", isAuthenticated, authController.getProfile);

// Logout
router.get("/logout", isAuthenticated, authController.logout);

module.exports = router;
