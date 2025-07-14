
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