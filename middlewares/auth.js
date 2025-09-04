// isAuthenticated middleware
module.exports.isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    req.user = req.session.user; // user info store
    return next();
  }
  res.redirect("/login"); // not logged in -> login page
};
