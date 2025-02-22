const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUsers,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.post("/create_user", postCreateUsers);
module.exports = router;
