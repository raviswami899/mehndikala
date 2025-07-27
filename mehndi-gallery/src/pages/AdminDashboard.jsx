// // Backend (Node.js + Express + MongoDB)

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB Schema
// const designSchema = new mongoose.Schema({
//   title: String,
//   category: String,
//   url: String,
//   tags: [String],
//   isApproved: { type: Boolean, default: false },
//   submittedAt: { type: Date, default: Date.now }
// });

// const Design = mongoose.model('Design', designSchema);

// // Email Notification Setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'priyarankawat88160@gmail.com',
//     pass: 'begn jiiw fcbe bgyf' // use app password, not your real Gmail password
//   }
// });

// const notifyAdmin = async (design) => {
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'admin@example.com',
//     subject: 'New Mehndi Design Submission',
//     text: `A new design was submitted:

// Title: ${design.title}
// Category: ${design.category}
// Tags: ${design.tags.join(", ")}
// URL: ${design.url}

// Please review and approve it.`
//   };

//   await transporter.sendMail(mailOptions);
// };

// // Add Design API (with approval = false)
// app.post('/api/designs', async (req, res) => {
//   try {
//     const design = new Design(req.body);
//     await design.save();
//     await notifyAdmin(design);
//     res.status(201).json(design);
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving design' });
//   }
// });

// // Admin Route: Get unapproved designs
// app.get('/api/admin/unapproved-designs', async (req, res) => {
//   try {
//     const designs = await Design.find({ isApproved: false });
//     res.json(designs);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch unapproved designs' });
//   }
// });

// // Admin Route: Approve a design
// app.put('/api/admin/approve/:id', async (req, res) => {
//   try {
//     const design = await Design.findByIdAndUpdate(
//       req.params.id,
//       { isApproved: true },
//       { new: true }
//     );
//     res.json(design);
//   } catch (err) {
//     res.status(500).json({ message: 'Approval failed' });
//   }
// });

// // Server Start
// mongoose.connect('mongodb://localhost:27017/mehndikala')
//   .then(() => app.listen(8000, () => console.log('Server running on port 8000')))
//   .catch(err => console.error('DB Connection Error:', err));
