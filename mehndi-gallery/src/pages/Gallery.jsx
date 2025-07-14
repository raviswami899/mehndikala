import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosInstance"; // Adjust if needed

function Gallery() {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/designs")
      .then((res) => {
        setDesigns(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching designs:", err);
        setDesigns([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* 🔙 Top Bar / Nav */}
      <nav className="bg-pink-100 px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-700">MehndiKala</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-pink-600 font-semibold">Gallery</Link>
        </div>
      </nav>

      {/* 📷 Gallery Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">All Mehndi Designs</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading designs...</p>
        ) : designs.length === 0 ? (
          <p className="text-center text-gray-500">No designs found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {designs.map((item) => (
              <div key={item._id} className="bg-white border rounded shadow hover:shadow-lg transition">
                <img
                  src={item.url}
                  alt={item.title || "Mehndi Design"}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-pink-700">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 📞 Footer */}
      <footer className="bg-pink-100 py-4 text-center text-sm text-gray-700">
        © 2025 MehndiKala • All Rights Reserved
      </footer>
    </div>
  );
}

export default Gallery;
