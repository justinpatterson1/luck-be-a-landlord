const express = require("express");
const router = express.Router();
const gameServices = require("../services/gameServices.js");

router.get("/",gameServices.getAllItems);
router.get("/:id",gameServices.getAnItem);
router.post("/",gameServices.AddAnItem);
router.put("/:id",gameServices.updateAnItem);
router.delete("/:id",gameServices.deleteAnItem);


module.exports = router;