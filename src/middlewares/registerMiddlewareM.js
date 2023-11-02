const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  let errores = validationResult(req);
  if (!errores.isEmpty()) {
    res.render("users/registerMayorista", {
      errors: errores.mapped(),
      oldData: req.body,
    });
  } else if (userInDB) {
    res.render("users/registerMayorista", {
      errors: {
        email: {
          msg: "Este correo electrónico ya está registrado.",
        },
      },
      oldData: req.body,
    });
  } else {
    next();
  }
};