import React from "react";
import "./Card.css";

const Card = ({ title, description, imageUrl, gradient }) => {
  return (
    <div className="card" style={{ borderImage: `${gradient} 1` }}>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
