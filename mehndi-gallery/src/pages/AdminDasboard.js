// // // src/pages/AdminDashboard.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "../api/axiosInstance"; // adjust path as needed

// // const AdminDashboard = () => {
// //   const [pendingDesigns, setPendingDesigns] = useState([]);

// //   useEffect(() => {
// //     fetchPendingDesigns();
// //   }, []);

// //   const fetchPendingDesigns = async () => {
// //     try {
// //       const res = await axios.get("/api/admin/pending-designs");
// //       setPendingDesigns(res.data);
// //     } catch (err) {
// //       console.error("Error fetching pending designs", err);
// //     }
// //   };

// //   const approveDesign = async (id) => {
// //     try {
// //       await axios.put(`/api/admin/approve-design/${id}`);
// //       alert("Design approved!");
// //       setPendingDesigns((prev) => prev.filter((d) => d._id !== id));
// //     } catch (err) {
// //       console.error("Approval failed", err);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-6xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4 text-pink-700">Pending Designs</h1>
// //       {pendingDesigns.length === 0 ? (
// //         <p className="text-gray-600">No pending designs 🎉</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //           {pendingDesigns.map((design) => (
// //             <div key={design._id} className="border p-4 rounded shadow">
// //               <img src={design.url} alt={design.title} className="w-full h-48 object-cover rounded mb-2" />
// //               <h2 className="text-lg font-semibold">{design.title}</h2>
// //               <p className="text-sm text-gray-500">{design.category}</p>
// //               <button
// //                 onClick={() => approveDesign(design._id)}
// //                 className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //               >
// //                 Approve
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// // src/pages/AdminDashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance"; // adjust this path as per your project

// const AdminDashboard = () => {
//   const [pendingDesigns, setPendingDesigns] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPendingDesigns();
//   }, []);

//   const fetchPendingDesigns = async () => {
//     try {
//       const res = await axios.get("/api/admin/unapproved-designs");
//       setPendingDesigns(res.data);
//     } catch (err) {
//       console.error("Error fetching pending designs", err);
//       alert("Failed to fetch pending designs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const approveDesign = async (id) => {
//     try {
//       await axios.put(`/api/admin/approve/${id}`);
//       alert("✅ Design approved!");
//       setPendingDesigns((prev) => prev.filter((d) => d._id !== id));
//     } catch (err) {
//       console.error("Approval failed", err);
//       alert("❌ Approval failed");
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-blue-700">Pending Designs</h1>

//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : pendingDesigns.length === 0 ? (
//         <p className="text-green-600">No pending designs 🎉</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {pendingDesigns.map((design) => (
//             <div key={design._id} className="border p-4 rounded-lg shadow bg-white">
//               <img
//                 src={design.url}
//                 alt={design.title}
//                 className="w-full h-48 object-cover rounded mb-3"
//               />
//               <h2 className="text-lg font-semibold mb-1">{design.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">{design.category}</p>
//               <button
//                 onClick={() => approveDesign(design._id)}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//               >
//                 Approve
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance"; // make sure this instance is correctly configured

const AdminDashboard = () => {
  const [pendingDesigns, setPendingDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingDesigns();
  }, []);

  const fetchPendingDesigns = async () => {
    try {
      const res = await axios.get("/admin/unapproved-designs"); // must match your backend
      setPendingDesigns(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch pending designs:", err);
      alert("Failed to fetch pending designs.");
    } finally {
      setLoading(false);
    }
  };
//  await axiosInstance.post(`/admin/approve-design/${id}`);

  const approveDesign = async (id) => {
    try {
      await axios.put(`/admin/approve/${id}`);
      alert("✅ Design approved!");
      setPendingDesigns((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      console.error("❌ Approval failed", err);
      alert("Approval failed");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Pending Designs</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : pendingDesigns.length === 0 ? (
        <p className="text-green-600">No pending designs 🎉</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pendingDesigns.map((design) => (
            <div key={design._id} className="border p-4 rounded-lg shadow bg-white">
              <img
                src={design.url}
                alt={design.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold mb-1">{design.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{design.category}</p>
              <button
                onClick={() => approveDesign(design._id)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
