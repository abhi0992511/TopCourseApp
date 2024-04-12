import React from "react";
import "./Spinner.css"

function Spinner() {
  return (
    <div>
      <div className="spinner"></div>
      <p className="text-lg text-white font-semibold">Loading...</p>
    </div>
  );
}
export default Spinner;
