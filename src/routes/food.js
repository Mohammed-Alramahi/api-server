const express = require("express");
const router = express.Router();
const foodModel = require("../models/food");
const dataCollection = require("../models/data-collection-class");
const food = new dataCollection(foodModel);
const validator = require("../middleware/validator");
const getFood = async (req, res, next) => {
  try {
    const id = req.params.id || null;
    const item = await food.read(id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
const createFood = async (req, res, next) => {
  try {
    const dataObj = req.body;
    if (!dataObj.description) {
      dataObj.description = "";
    }
    const item = await food.create(dataObj);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
const updateFood = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataObj = req.body;
    const item = await food.update(id, dataObj);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
const deleteFood = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await food.delete(id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};

router.get("/", getFood);
router.get("/:id", getFood);
router.post("/", validator, createFood);
router.put("/:id", validator, updateFood);
router.delete("/:id", deleteFood);
module.exports = router;
