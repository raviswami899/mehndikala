const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: [String],
  url: { type: String, required: true }
});

module.exports = mongoose.model('Design', designSchema);
