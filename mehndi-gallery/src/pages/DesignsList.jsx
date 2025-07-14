//  import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance"; // Make sure this is correct
// import DesignCard from "../components/DesignCard"; // Adjust path if needed


// function DesignsList() {
//   const [designs, setDesigns] = useState([]); // ✅ Start with an empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/designs")
//       .then((res) => {
//         console.log("Fetched designs:", res.data);
//         setDesigns(res.data);
//         setError(null);
//       })
//       .catch((err) => {
//         console.error("Error fetching designs:", err);
//         setError("Failed to load designs.");
//         setDesigns([]); // fallback to empty array
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading designs...</div>;

//   if (error) return <div style={{ color: "red" }}>{error}</div>;

//   if (!Array.isArray(designs) || designs.length === 0) {
//     return <div>No designs found.</div>;
//   }
//   {Array.isArray(designs) && designs.map(design => (
//     <DesignCard key={design.id} data={design} />
//   ))}
  

//   return (
//     <div>
//       <h2>Mehndi Designs</h2>
//       <div className="design-grid">
//         {designs.map((design) => (
//           <div key={design._id} className="design-card">
//             <img src={design.url} alt={design.title} />
//             <h3>{design.title}</h3>
//             <p>{design.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DesignsList;
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance"; // Adjust path as per your project
// import DesignCard from "../components/DesignCard"; // Ensure this component exists

// function DesignsList() {
//   const [designs, setDesigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/designs") // Replace with your actual API endpoint
//       .then((res) => {
//         console.log("Fetched designs:", res.data);
//         setDesigns(res.data); // Assumes res.data is an array of design objects
//         setError(null);
//       })
//       .catch((err) => {
//         console.error("Error fetching designs:", err);
//         setError("Failed to load designs.");
//         setDesigns([]);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading designs...</div>;

//   if (error) return <div style={{ color: "red" }}>{error}</div>;

//   if (!Array.isArray(designs) || designs.length === 0) {
//     return <div>No designs found.</div>;
//   }

//   return (
//     <div className="designs-list">
//       <h2>Mehndi Designs</h2>
//       <div className="design-grid">
//         {designs.map((design) => (
//           <DesignCard key={design._id || design.id} data={design} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DesignsList;
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance"; // Adjust if axios instance is elsewhere
// import DesignCard from "../components/DesignCard"; // Adjust path if needed

// function DesignsList() {
//   const [designs, setDesigns] = useState([]);       // ✅ Initialize as empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/designs")
//       .then((res) => {
//         console.log("Fetched designs:", res.data);
//         setDesigns(res.data || []); // ✅ Use fallback to ensure it's an array
//         setError(null);
//       })
//       .catch((err) => {
//         console.error("Error fetching designs:", err);
//         setError("Failed to load designs.");
//         setDesigns([]); // Fallback to empty array
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading designs...</div>;

//   if (error) return <div style={{ color: "red" }}>{error}</div>;

//   if (!Array.isArray(designs) || designs.length === 0) {
//     return <div>No designs found.</div>;
//   }

//   return (
//     <div className="designs-list">
//       <h2>Mehndi Designs</h2>
//       <div className="design-grid">
//         {designs.map((design) => (
//           <DesignCard key={design._id || design.id} data={design} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DesignsList;
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance";
// import DesignCard from "../components/DesignCard";

// function DesignsList() {
//   const [designs, setDesigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     const { signal } = controller;

//     const fetchDesigns = async () => {
//       try {
//         const response = await axios.get("/designs", { 
//           signal,
//           params: { limit: 100 } // Add pagination parameters as needed
//         });
        
//         console.log("Fetched designs:", response.data);
//         // Ensure data is an array even if API returns null/undefined
//         const data = Array.isArray(response.data) ? response.data : [];
//         setDesigns(data);
//         setError(null);
//       } catch (err) {
//         if (!signal.aborted) {
//           console.error("Error fetching designs:", err);
//           setError(err.response?.data?.message || "Failed to load designs.");
//           setDesigns([]);
//         }
//       } finally {
//         if (!signal.aborted) setLoading(false);
//       }
//     };

//     fetchDesigns();

//     return () => controller.abort();
//   }, []);

//   if (loading) return <div className="loading">Loading designs...</div>;
  
//   if (error) return <div className="error" style={{ color: "red" }}>{error}</div>;
  
//   if (designs.length === 0) {
//     return <div className="no-designs">No designs found.</div>;
//   }

//   return (
//     <div className="designs-list">
//       <h2>Mehndi Designs</h2>
//       <div className="design-grid">
//         {designs.map((design) => (
//           <DesignCard 
//             key={design._id || design.id} 
//             data={design} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DesignsList;
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosInstance";
// import DesignCard from "../components/DesignCard";

// function DesignsList() {
//   const [designs, setDesigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();
    
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/designs", {
//           signal: controller.signal,
//           params: { limit: 100 }
//         });
        
//         // Ensure we always get an array
//         const data = Array.isArray(response?.data) 
//           ? response.data 
//           : [];
        
//         setDesigns(data);
//         setError(null);
//       } catch (err) {
//         if (!axios.isCancel(err)) {
//           console.error("Fetch error:", err);
//           setError(err.response?.data?.message || "Error loading designs");
//           setDesigns([]);
//         }
//       } finally {
//         if (!controller.signal.aborted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     return () => controller.abort();
//   }, []);

//   // Additional safeguard before render
//   if (loading) return <div className="loading">Loading designs...</div>;
  
//   if (error) return <div className="error" style={{ color: "red" }}>{error}</div>;
  
//   // Ensure designs is always treated as array
//   const safeDesigns = Array.isArray(designs) ? designs : [];

//   if (safeDesigns.length === 0) {
//     return <div className="no-designs">No designs found.</div>;
//   }

//   return (
//     <div className="designs-list">
//       <h2>Mehndi Designs</h2>
//       <div className="design-grid">
//         {safeDesigns.map((design) => (
//           <DesignCard 
//             key={design._id || design.id} 
//             data={design} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DesignsList;
import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import DesignCard from "../components/DesignCard";

function DesignsList() {
  
  const [designs, setDesigns] = useState([]);
  const safeDesigns = Array.isArray(designs) ? designs : [];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/designs", {
          signal: controller.signal
        });
        
        // Always ensure we have an array
        const data = Array.isArray(response?.data) ? response.data : [];
        setDesigns(data);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Fetch error:", err);
          setError(err.response?.data?.message || "Error loading designs");
          setDesigns([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  // Create a safe reference that's always an array
  //const safeDesigns = Array.isArray(designs) ? designs : [];

  if (loading) return <div className="loading">Loading designs...</div>;
  
  if (error) return <div className="error" style={{ color: "red" }}>{error}</div>;
  
  if (safeDesigns.length === 0) {
    return <div className="no-designs">No designs found.</div>;
  }

  return (
    <div className="designs-list">
      <h2>Mehndi Designs</h2>
      <div className="design-grid">
      {safeDesigns.map(design => (
  <DesignCard key={design._id || design.id} data={design} />
))}

        
      </div>
    </div>
  );
}

export default DesignsList;