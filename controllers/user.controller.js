const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Blog = require("../models/blog.model");

// Login page
module.exports.loginPage = (req, res) => res.render("pages/login");

// Login POST
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.redirect("/signup");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.redirect("/login");

    // Set session
    req.session.userId = user._id;
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    res.redirect("/login");
  }
};

// Signup page
module.exports.signupPage = (req, res) => res.render("pages/signup");

// Signup POST
module.exports.signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) return res.redirect("/signup");

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashPassword
    });

    req.session.userId = user._id;
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    res.redirect("/signup");
  }
};

// Logout
module.exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

// Home page (blogs)
module.exports.homePage = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate("createdBy", "username");
    res.render("index", { blogs, user: req.session.user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error loading blogs");
  }
};

// Profile page
module.exports.getProfile = async (req, res) => {
  try {
    const blogs = await Blog.find({ createdBy: req.session.user._id });
    res.render("profile", { user: req.session.user, blogs });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error loading profile");
  }
};
