const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUsers,
  getCreatePage,
  getUpdatePage,
  postUpdateUsers,
  postDeleteUsers,
  postHandleRemoveUsers,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.post("/create_user", postCreateUsers);
router.get("/update/:userId", getUpdatePage);
router.post("/update_user", postUpdateUsers);
router.post("/delete_user/:userId", postDeleteUsers);
router.post("/delete_user", postHandleRemoveUsers);
module.exports = router;
