module.exports = (req, res, next) => {
  if (req.session.userLogged) {
    return res.redirect("/users/profile");
  }
  next();
};
