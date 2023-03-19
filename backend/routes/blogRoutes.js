const express = require("express");
const {
  newBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", newBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
