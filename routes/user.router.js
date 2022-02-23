const Router = require("express");
const router = new Router();
const UserController = require("../controllers/user.controller");
const isAuthenticated = require("../utils/Auth")

router.get("/", UserController.getAll);
router.get("/todos", isAuthenticated, UserController.getAllByUserId);
router.post("/", UserController.createOne);

module.exports = router;