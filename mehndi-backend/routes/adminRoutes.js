
const express = require('express');
const router = express.Router();
const Design = require('../models/Design');
const { getUnapprovedDesigns } = require("../controllers/adminController");
const adminController = require('../controllers/adminController');
//const adminRoutes = require("./routes/adminRoutes");
const { addDesign } = require("../controllers/adminController");

// Route must match this path exactly:
// router.get("/unapproved-designs", getUnapprovedDesigns);
// router.post("/approve-design/:id", approveDesign);
// Get unapproved designs
router.get('/unapproved-designs', adminController.getUnapprovedDesigns);

// Approve a design
router.post('/approve-design/:id', adminController.approveDesign);

// GET unapproved designs
router.get('/admin/unapproved-designs', async (req, res) => {
  try {
    const designs = await Design.find({ isApproved: false });
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch unapproved designs' });
  }
});

// PUT approve a design
router.put('/approve/:id', async (req, res) => {
  try {
    const design = await Design.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: 'Approval failed' });
  }
});
// Add a design from backend (admin)
router.post("/add-design", addDesign);

module.exports = router;
