// // routes/designRoutes.js
const express = require('express');
const router = express.Router();
const Design = require('../models/Design');

// GET all approved designs
router.get("/", async (req, res) => {
  try {
    const designs = await Design.find({ isApproved: true }); // Only approved
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch designs" });
  }
});

// POST new design with approved = false
// router.post("/", async (req, res) => {
//   try {
//     const design = new Design({ ...req.body, approved: false });
//     const saved = await design.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: "Add failed", error: err });
//   }
// });
// routes/designRoutes.js

router.post("/", async (req, res) => {
  try {
    const design = new Design({ ...req.body, isApproved: false }); // ✅ Use isApproved
    const saved = await design.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Add failed", error: err });
  }
});


module.exports = router;
