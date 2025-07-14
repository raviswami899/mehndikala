import React from 'react';
import { Link } from 'react-router-dom';
import mehndiImages from './data/images'; // sample data
<Link to="/gallery">
  <button>View Gallery</button>
</Link>

const categories = [
  "Bridal", "Rakhi", "Savan", "Holi", "Diwali",
  "Simple", "Traditional", "Arabic"
];

const HomePage = () => {
  return (
    
    <div className="font-sans text-gray-800">
        <nav className="bg-pink-100 px-6 py-3 flex justify-between items-center">
  <h1 className="text-xl font-bold text-pink-700">MehndiKala</h1>
  <div className="space-x-4">
    <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
    <Link to="/gallery" className="text-gray-700 hover:text-pink-600">Gallery</Link>
  </div>
</nav>

      
      {/* 🔸 Hero Section */}

      <section className="bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700">
          Welcome to MehndiKala 🎨
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Explore beautiful Mehndi designs for every occasion — Bridal, Rakhi, Savan, and more.
        </p>
        <Link to="/gallery">
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
            View Gallery
          </button>
        </Link>
      </section>

      {/* 🔹 Categories */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white border p-4 rounded shadow hover:bg-pink-50 transition">
              <p className="font-semibold text-pink-700">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🖼 Gallery Preview */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Designs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {mehndiImages.slice(0, 6).map((img) => (
            <div key={img.id} className="bg-white border rounded shadow hover:shadow-lg transition">
              <img src={img.url} alt={img.title} className="h-48 w-full object-cover rounded-t" />
              <div className="p-3">
                <h3 className="font-semibold">{img.title}</h3>
                <p className="text-sm text-gray-500">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/gallery">
            <button className="px-5 py-2 border border-pink-600 text-pink-700 rounded hover:bg-pink-600 hover:text-white transition">
              Browse Full Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* 📞 Footer */}
      <footer className="bg-pink-100 py-4 text-center text-sm text-gray-700">
        © 2025 MehndiKala • All Rights Reserved
      </footer>
    </div>
  );
};

export default HomePage;
