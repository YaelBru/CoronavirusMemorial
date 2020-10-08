const express = require("express");
const memorialRoute = express.Router();
const MemorialController = require("../controllers/memorial.controller");

memorialRoute.route("/").get(MemorialController.getMemorialList);
memorialRoute.route("/").post(MemorialController.addMemorial);

module.exports = memorialRoute;
