const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/userController");
const router = express.Router();

//POST ROUTE FOR USER RIGISTRATION
router.route("/").post(registerUser);

// POST Routes for AUTH
router.post("/login", authController);

// GET USER PROFILE (PRIVATE ROUTE)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
