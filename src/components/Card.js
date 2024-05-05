import React from "react";
import "./card.css";

const Card = ({ title, description, link, img }) => {
  return (
    <div className="card-container">
      <a href={link} className="">
        <div className="card">
          <div className="img-content">
            <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="content">
            <p className="heading">{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
