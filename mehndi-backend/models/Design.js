const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
  title: String,
  category: String,
  url: String,
  tags: [String],
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Design', DesignSchema);
