// Loader.js
import React from 'react';

export default function Loader() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // optional: light transparent background
        zIndex: 9999
      }}
    >
      <div 
        className="spinner-border text-primary" 
        role="status" 
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
