import React from "react";
import "./CommonSection.css";
function CommonSection({ title }) {
  return (
    <div className="cmn-section">
      <h1>{title}</h1>
    </div>
  );
}

export default CommonSection;
