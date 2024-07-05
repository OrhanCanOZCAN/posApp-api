const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();


// !CRUN Application - REST API


// !Create - Get All
router.post("/add-category", async (req, res) => {

  
  try {
    const newCategory = new Category(req.body);   //req.body
    await newCategory.save();
   
    res.status(200).json("Eklendi");
  } catch (error) {
    res.status(500).json(error);
  }
});
//!Read - Get One
router.get("/get-category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
});

// !update - Get Update
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Kategori başarıyla düzenlendi.");
  } catch (error) {
    console.log(error);
  }
});
// !Delete - Get Delete
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Kategori silindi.");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
