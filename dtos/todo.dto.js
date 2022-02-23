const TODO_MODEL = (req, res) => {
  return {
    title: req.body.title,
    description: req.body.description,
    check: req.body.check,
    userId: req.body.userId,
  };
};

module.exports = TODO_MODEL;