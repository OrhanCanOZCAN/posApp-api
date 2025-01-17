const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();

// !CRUN Application - REST API

// !Create - Get All
router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Fatura eklendi.");
  } catch (error) {
    res.status(500).json(error);
  }
});
//!Read - Get One
router.get("/get-bills", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json(error);
  }
});

// !update - Get Update
router.put("/update-bill", async (req, res) => {
  try {
    await Bill.findOneAndUpdate({ _id: req.body.billId }, req.body);
    res.status(200).json("Fatura başarıyla düzenlendi.");
  } catch (error) {
    res.status(500).json(error);
  }
});
// !Delete - Get Delete
router.delete("/delete-bill", async (req, res) => {
  try {
    await Bill.findOneAndDelete({ _id: req.body.billId });
    res.status(200).json("Fatura silindi.");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
