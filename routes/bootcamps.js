const express = require("express");

const router = express.Router();

// get all listings
router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Show all listings" });
});

// get single listing details
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Get bootcamp ${req.params.id} details` });
});

// create new listing
router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
});

// update a listing
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
});

// delete listing
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Delete single listing bootcamp" });
});

module.exports = router;
