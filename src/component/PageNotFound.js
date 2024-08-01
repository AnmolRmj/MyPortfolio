import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={handleback}>Back</button>
    </div>
  );
};

export default PageNotFound;
