const express = require("express");
const tributesRoute = express.Router();
const TributesController = require("../controllers/tribute.controller");

tributesRoute.route("/").get(TributesController.getTributesList);
tributesRoute.route("/").post(TributesController.addTribute);

module.exports = tributesRoute;
