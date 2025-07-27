// AddDesignButton.jsx
import React, { useState } from "react";
import AddDesignForm from "./AddDesignForm";

const AddDesignButton = ({ onDesignAdded }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
      >
        Add Your Design
      </button>

      {showForm && (
        <AddDesignForm
          onClose={() => setShowForm(false)}
          onDesignAdded={onDesignAdded}
        />
      )}
    </>
  );
};

export default AddDesignButton;
