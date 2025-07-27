 const Design = require('../models/Design'); // Make sure the path is correct

// Fetch unapproved designs
const getUnapprovedDesigns = async (req, res) => {
  try {
    const unapproved = await Design.find({ isApproved: false });
    res.json(unapproved);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Approve a design
const approveDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }

    design.isApproved = true; // ✅ Correct field name
    await design.save();

    res.status(200).json({ message: "Design approved", design });
  } catch (error) {
    console.error("Error approving design:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// const addDesign = async (req, res) => {
//   try {
//     const { title, category, url } = req.body;

//     if (!title || !category || !url) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const newDesign = new Design({
//       title,
//       category,
//       url,
//       isApproved: true, // Directly approved if added by admin
//     });

//     await newDesign.save();
//     res.status(201).json({ message: "Design added successfully", design: newDesign });
//   } catch (error) {
//     console.error("Failed to add design:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
const addDesign = async (req, res) => {
  try {
    const data = req.body;

    // Handle multiple designs
    if (Array.isArray(data)) {
      const validDesigns = data.filter(
        (d) => d.title && d.category && d.url
      ).map(
        (d) => ({
          title: d.title,
          category: d.category,
          url: d.url,
          isApproved: true, // Admin-added designs are auto-approved
        })
      );

      if (validDesigns.length === 0) {
        return res.status(400).json({ message: "No valid designs to add" });
      }

      const inserted = await Design.insertMany(validDesigns);
      return res.status(201).json({ message: "Designs added successfully", designs: inserted });
    }

    // Handle single design
    const { title, category, url } = data;
    if (!title || !category || !url) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newDesign = new Design({
      title,
      category,
      url,
      isApproved: true,
    });

    await newDesign.save();
    return res.status(201).json({ message: "Design added successfully", design: newDesign });
  } catch (error) {
    console.error("Failed to add design:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  getUnapprovedDesigns,
  approveDesign,
  addDesign,
};
