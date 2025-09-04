const Blog = require("../models/blog.model");

// List blogs (home page)
module.exports.listBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 }).populate("createdBy", "username");
  res.render("index", { blogs, user: req.user });
};

// Add blog
module.exports.addBlog = async (req, res) => {
  await Blog.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    createdBy: req.user._id
  });
  res.redirect("/");
};

// Delete blog
module.exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.createdBy.toString() !== req.user._id.toString()) return res.status(403).send("Not authorized");
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/profile");
};

// Edit blog form
module.exports.editBlogForm = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.createdBy.toString() !== req.user._id.toString()) return res.status(403).send("Not authorized");
  res.render("editblog", { blog });
};

// Update blog
module.exports.updateBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const blog = await Blog.findById(req.params.id);
  if (blog.createdBy.toString() !== req.user._id.toString()) return res.status(403).send("Not authorized");
  await Blog.findByIdAndUpdate(req.params.id, { title, content, image });
  res.redirect("/profile");
};

// Like blog
module.exports.likeBlog = async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
  res.redirect("back");
};

// Dislike blog
module.exports.dislikeBlog = async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } });
  res.redirect("back");
};

// Comment blog
module.exports.commentBlog = async (req, res) => {
  const comment = { text: req.body.comment, createdAt: new Date() };
  await Blog.findByIdAndUpdate(req.params.id, { $push: { comments: comment } });
  res.redirect("back");
};
