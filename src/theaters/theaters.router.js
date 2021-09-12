const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/method-not-allowed");

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;