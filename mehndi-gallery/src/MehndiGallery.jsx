import React from "react";
import mehndiImages from "./data/images"; // Your preloaded images array
import { Link } from "react-router-dom";

const MehndiGallery = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8 max-w-6xl mx-auto">
      {/* 🔝 Back to Home */}
      <div className="mb-6">
        <Link to="/" className="text-pink-600 hover:underline">&larr; Back to Home</Link>
      </div>

      {/* 🖼 Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Mehndi Design Gallery</h1>

      {/* 🖼 Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mehndiImages.map((img) => (
          <div key={img.id} className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={img.url}
              alt={img.title}
              className="h-44 w-full object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h2 className="font-semibold text-base">{img.title}</h2>
              <p className="text-sm text-gray-500 mb-1">{img.category}</p>
              <div className="text-xs text-gray-400 truncate">Tags: {img.tags.join(", ")}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 📞 Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 MehndiKala • All Rights Reserved
      </footer>
    </div>
  );
};

export default MehndiGallery;
