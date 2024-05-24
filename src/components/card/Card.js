import { image_url } from "../../../Config/Config";
import rating from "../../assets/rating-icon.png";
import "./Card.css";

import React from "react";

const Card = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating }) => {
  
  return (
    <div className="card">
      <div className="card-img">
        <img src={`${image_url}/${cloudinaryImageId}`} alt="card-image" />
      </div>
      <div className="info">
        <h2 className="title">{name}</h2>
        <p className="rating">
          <img src={rating} alt="rating" />
          <p>{avgRating}</p>
        </p>
        <p className="cuisines">{cuisines?.join(", ")}</p>
      </div>
    </div>
  );
};

export default Card;
