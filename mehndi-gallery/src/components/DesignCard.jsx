import React from "react";
import "./DesignCard.css"; // Optional: for styles

const DesignCard = ({ data }) => {
  if (!data) return null;

  const { title, category, url, tags } = data;

  return (
    <div className="design-card">
      <img src={url} alt={title} className="design-image" />
      <h3>{title}</h3>
      <p>{category}</p>
      <div className="tags">
        {Array.isArray(tags) &&
          tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default DesignCard;
