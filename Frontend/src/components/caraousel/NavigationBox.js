import React from "react";
import food from "./food-sharing2.png"
import { Link } from "react-router-dom";

export default function FoodSharingSection() {
  return (
    <div className="container my-5 text-center">
      {/* Heading */}
      <h2 className="fw-bold text-warning">SURPLUS FOOD SHARING</h2>
      <h5 className="text-secondary mb-4">
        Coalition of Partners To Prevent Food Waste And Food Loss
      </h5>

      {/* Image */}
      <div className="mb-5">
        <img
          src={food} // replace this with correct path
          alt="Surplus Food Sharing Info"
          className="img-fluid"
          style={{ maxHeight: "600px", objectFit: "contain" }}
        />
      </div>

      {/* Description Box */}
      <div className="bg-warning bg-opacity-75 p-4 rounded shadow-sm mb-4">
        <p className="mb-0 fw-semibold text-start">
          India’s primary issue is lack of cold chains and adequate storage facilities leading to a large amount of loss along the supply chain. This, coupled with rising incomes and lack of awareness on the issue of food waste, plays an important role in India's contribution to environmental degradation today.
          <br />
          <br />
          Not only do we need to put surplus food back into the food chain but we also need to secure food for future generations at a low environmental cost.
        </p>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
       
        <Link to="/user/signin"><button className="btn btn-outline-success rounded-pill px-4 fw-bold">
          Donors
        </button></Link>
        <Link to="organization/login"><button className="btn btn-outline-primary rounded-pill px-4 fw-bold">
          Social Work Organization
        </button>
        </Link>
        
      </div>
    </div>
  );
}
