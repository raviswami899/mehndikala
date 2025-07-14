
require("dotenv").config(); // Only once

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Design = require("./models/Design");

const app = express();
//const cors = require("cors");
// app.use(cors()); // ✅ TEMP: Allow all origins, all methods
// app.use(express.json());

// ✅ Recommended CORS setup
const corsOptions = {
    origin: "*", // * allows Postman too
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ DB error:", err));

// ✅ ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Mehndi Designs API");
  });
  

app.get("/api/designs", async (req, res) => {
  try {
    const designs = await Design.find();
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch designs" });
  }
});

app.get("/api/designs/:id", async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) return res.status(404).json({ message: "Not found" });
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: "Error getting design", error: err });
  }
});

app.post("/api/designs", async (req, res) => {
  try {
    const design = new Design(req.body);
    const saved = await design.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Add failed", error: err });
  }
});

app.put("/api/designs/:id", async (req, res) => {
  try {
    const updated = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err });
  }
});

app.delete("/api/designs/:id", async (req, res) => {
  try {
    await Design.findByIdAndDelete(req.params.id);
    res.json({ message: "Design deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err });
  }
});

app.get("/api/search", async (req, res) => {
  const keyword = req.query.q || "";
  try {
    const results = await Design.aggregate([
      {
        $search: {
          index: "default",
          text: {
            query: keyword,
            path: ["title", "tags", "category"]
          }
        }
      }
    ]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err.message });
  }
});

// ✅ Server start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
