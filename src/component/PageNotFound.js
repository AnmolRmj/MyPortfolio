import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15rem" }}
    >
      <button
        onClick={handleback}
        style={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "grey",
          textAlign: "center",

          width: "10%",
          padding: "10px 20px", // Add padding for better appearance
        }}
      >
        Back
      </button>
    </div>
  );
};

export default PageNotFound;
