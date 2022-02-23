const User = require("../models/user.model");

const isAuthenticated = async (req, res, next) => {
  try {
    if (!req.query.apiKey) {
      return res.status(401).send({
        message: "Must be authenticated with an API Key",
      });
    } else {
      const acces = await User.findOne({
        where: { id: req.query.id, apiKey: req.query.apiKey },
      });

      if (acces !== null) {
        return next();
      } else {
        return res.status(401).send({
          message: "API Key does not match!",
        });
      }
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = isAuthenticated;