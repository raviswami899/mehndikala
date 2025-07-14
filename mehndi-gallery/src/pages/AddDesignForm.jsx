import React, { useState } from "react";
import axios from "axios";

const AddDesignForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    url: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim())
    };

    try {
      const res = await axios.post("/designs", payload);
      alert("Design added!");
      console.log("Saved:", res.data);
    } catch (err) {
      console.error("Error adding design:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="block my-2" />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} required className="block my-2" />
      <input type="text" name="url" placeholder="Image URL" onChange={handleChange} required className="block my-2" />
      <input type="text" name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} required className="block my-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-1 mt-2 rounded">Add Design</button>
    </form>
  );
};

export default AddDesignForm;
