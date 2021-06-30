const express = require("express");
const router = express.Router();
const clothesModel = require("../models/clothes");
const dataCollection = require("../models/data-collection-class");
const cloth = new dataCollection(clothesModel);

const getCloth = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await cloth.read(id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};

const createCloth = async (req, res, next) => {
  try {
    const dataObj = req.body;
    if (!dataObj.description) {
      dataObj.description = "";
    }
    const item = await cloth.create(dataObj);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
const updateCloth = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await cloth.update(id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
const deleteCloth = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await cloth.delete(id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};

router.get("/", getCloth);
router.get("/:id", getCloth);
router.post("/", createCloth);
router.put("/:id", updateCloth);
router.delete("/:id", deleteCloth);
module.exports = router;
