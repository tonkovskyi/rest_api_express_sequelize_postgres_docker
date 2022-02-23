const USER_MODEL = (req, res) => {
    return {
      username: req.body.username,
    };
  };
  
  module.exports = USER_MODEL;