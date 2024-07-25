const express = require("express");
const router = express.Router();
const restaurantController = require("../controlles/restaurant.controller");

//Create a restaurant
//POST http://localhost:5000/api/v1/restaurants/
router.post("/", restaurantController.create);

//Get All restaurant
router.get("/", restaurantController.getAll);

//Get a restaurant by Id
router.get("/:id", restaurantController.getById);

//update a restaurant
router.put("/:id", restaurantController.update);

//delete a restaurant
router.delete("/:id", restaurantController.delete);

module.exports = router;
