// import React, { useEffect, useState } from "react";
// //import axios from axios;
// import { Link } from 'react-router-dom';
// import axios from "../api/axiosInstance"; // adjust if path differs
// import AddDesignButton from "./AddDesignButton";
// import AddDesignForm from "./AddDesignForm";

// function Home() {
//    const [designs, setDesigns] = useState([]);
//    const [selectedCategory, setSelectedCategory] = useState("All");

//    const categories = [
//     "All",
//     "Bridal",
//     "Simple",
//     "Arabic",
//     "Diwali",
//     "Holi",
//     "Rakhi",
//     "Savan Mehndi",
//     "Engagement"
//   ];
  

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/designs")
//       .then((res) => {
//         console.log("Fetched designs:", res.data);
//         setDesigns(Array.isArray(res.data) ? res.data : []);
//       })
//       .catch((err) => {
//         console.error("Error fetching designs:", err);
//         setDesigns([]); // fallback to prevent .map crash
//       });
//   }, []);
  
//   const filteredDesigns = designs.filter((item) => {
//     if (selectedCategory === "All") return true;
  
//     const category = selectedCategory.toLowerCase();
//     const inTitle = item.title?.toLowerCase().includes(category);
//     const inTags = item.tags?.some(tag => tag.toLowerCase().includes(category));
  
//     return inTitle || inTags;
//   });
//   const addNewDesign = (design) => {
//     setDesigns(prev => [design, ...prev]); // Add new design to front of the list
//   };

//   return (
   
//     <div className="font-sans text-gray-800">
//     <nav className="bg-pink-100 px-6 py-3 flex justify-between items-center">
// <h1 className="text-xl font-bold text-pink-700">MehndiKala</h1>
// <div className="space-x-4">
// <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
// <Link to="/gallery" className="text-gray-700 hover:text-pink-600">Gallery</Link>
// </div>
// </nav>

  
//   {/* 🔸 Hero Section */}

//   <section className="bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 py-16 px-6 text-center">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700">
//       Welcome to MehndiKala 
//     </h1>
//     <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
//       Explore beautiful Mehndi designs for every occasion — Bridal, Rakhi, Savan, and more.
//     </p>
//     <Link to="/gallery">
//       <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
//         View Gallery
//       </button>
//     </Link>
//   </section>

//   {/* 🔹 Categories */}
//   <section className="py-10 px-4 max-w-5xl mx-auto">
//     <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
   

//   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//   {/* //<div className="flex flex-wrap justify-center gap-2 mb-6"> */}
  
//   {categories.map((cat) => (
//     <button
//       key={cat}
//       onClick={() => setSelectedCategory(cat)}
//       className={`px-4 py-2 rounded-full border font-semibold transition ${
//         selectedCategory === cat
//           ? "bg-pink-600 text-white border-pink-600"
//           : "bg-white text-pink-700 border-pink-300 hover:bg-pink-100"
//       }`}
//     >
//       {cat}
//     </button>
//   ))}
// {/* </div> */}

//   </div>

//     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">

//       {filteredDesigns.map((item) => (
//           <div key={item._id} className="border rounded-lg p-2 shadow">
//             <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="mt-2 font-semibold">{item.title}</h3>
//             <p className="text-sm text-gray-500">{item.category}</p>
//           </div>
//         ))}
//     </div>
//   </section>

//   {/* 🖼 Gallery Preview */}
//   <section className="py-10 px-4 max-w-6xl mx-auto">
//     {/* <h2 className="text-2xl font-bold mb-6 text-center">Featured Designs</h2>
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      
//        {filteredDesigns.map((item) => (
//           <div key={item._id} className="border rounded-lg p-2 shadow">
//             <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="mt-2 font-semibold">{item.title}</h3>
//             <p className="text-sm text-gray-500">{item.category}</p>
//           </div>
//         ))}
//     </div> */}
//     <div className="text-center mt-6">
//       <Link to="/gallery">
//         <button className="px-5 py-2 border border-pink-600 text-pink-700 rounded hover:bg-pink-600 hover:text-white transition">
//           Browse Full Gallery
//         </button>
//       </Link>
//     </div>
//     <AddDesignButton onDesignAdded={addNewDesign} />
//   </section>
  

//   {/* 📞 Footer */}
//   <footer className="bg-pink-100 py-4 text-center text-sm text-gray-700">
//     © 2025 MehndiKala • All Rights Reserved
//   </footer>
// </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "../api/axiosInstance";
import AddDesignButton from "./AddDesignButton";

function Home() {
  const [designs, setDesigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Bridal", "Simple", "Arabic", "Diwali",
    "Holi", "Rakhi", "Savan Mehndi", "Engagement"
  ];

  useEffect(() => {
    axios.get("/designs")
      .then((res) => {
        const allDesigns = Array.isArray(res.data) ? res.data : [];
        const approvedDesigns = allDesigns.filter(item => item.isApproved);
        setDesigns(approvedDesigns);
      })
      .catch((err) => {
        console.error("Error fetching designs:", err);
        setDesigns([]);
      });
  }, []);

  const filteredDesigns = designs.filter((item) => {
    if (selectedCategory === "All") return true;
    const category = selectedCategory.toLowerCase();
    const inTitle = item.title?.toLowerCase().includes(category);
    const inTags = item.tags?.some(tag => tag.toLowerCase().includes(category));
    return inTitle || inTags;
  });

  return (
    <div className="font-sans text-gray-800">
      <nav className="bg-pink-100 px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-700">MehndiKala</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-pink-600">Gallery</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700">
          Welcome to MehndiKala 
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

      {/* Categories */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border font-semibold transition ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-white text-pink-700 border-pink-300 hover:bg-pink-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-6">
          {filteredDesigns.map((item) => (
            <div key={item._id} className="border rounded-lg p-2 shadow">
              <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Design Button */}
      <section className="text-center mt-10 px-4">
        <AddDesignButton />
        <div className="mt-6">
          <Link to="/gallery">
            <button className="px-5 py-2 border border-pink-600 text-pink-700 rounded hover:bg-pink-600 hover:text-white transition">
              Browse Full Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-4 text-center text-sm text-gray-700 mt-12">
        © 2025 MehndiKala • All Rights Reserved
      </footer>
    </div>
  );
}

export default Home;

