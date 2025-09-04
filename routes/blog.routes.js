const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
const { isAuthenticated } = require("../middlewares/auth");

// Add Blog
router.get("/addblog", isAuthenticated, (req, res) => res.render("addblog"));
router.post("/addblog", isAuthenticated, blogController.addBlog);

// Edit Blog
router.get("/edit/:id", isAuthenticated, blogController.editBlogForm);
router.post("/edit/:id", isAuthenticated, blogController.updateBlog);

// Delete Blog
router.get("/delete/:id", isAuthenticated, blogController.deleteBlog);

// Like / Dislike
router.post("/like/:id", isAuthenticated, blogController.likeBlog);
router.post("/dislike/:id", isAuthenticated, blogController.dislikeBlog);

// Comment
router.post("/comment/:id", isAuthenticated, blogController.commentBlog);

module.exports = router;
