// import React, { useState } from "react";
// import axios from "axios";

// const AddDesignForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     url: "",
//     tags: "",
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...formData,
//       tags: formData.tags.split(",").map(tag => tag.trim())
//     };

//     try {
//       const res = await axios.post("/designs", payload);
//       alert("Design added!");
//       console.log("Saved:", res.data);
//     } catch (err) {
//       console.error("Error adding design:", err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded">
//       <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="block my-2" />
//       <input type="text" name="category" placeholder="Category" onChange={handleChange} required className="block my-2" />
//       <input type="text" name="url" placeholder="Image URL" onChange={handleChange} required className="block my-2" />
//       <input type="text" name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} required className="block my-2" />
//       <button type="submit" className="bg-green-600 text-white px-4 py-1 mt-2 rounded">Add Design</button>
//     </form>
//   );
// };

// export default AddDesignForm;
// AddDesignForm.jsx
import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const AddDesignForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    url: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      isApproved: false, // 👈 Mark as unapproved initially
    };

    try {
      await axiosInstance.post("/api/designs", payload);
      alert("Your design was submitted and is awaiting approval.");
      onClose(); // Don't add to UI until approved
    } catch (err) {
      console.error("Error adding design:", err);
      alert("Failed to add design.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-pink-700 text-center">
          Add Your Design
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
          className="block w-full mb-3 px-3 py-2 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
          className="block w-full mb-3 px-3 py-2 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="text"
          name="url"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="block w-full mb-3 px-3 py-2 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          onChange={handleChange}
          required
          className="block w-full mb-4 px-3 py-2 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white"
          >
            Submit Design
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDesignForm;
