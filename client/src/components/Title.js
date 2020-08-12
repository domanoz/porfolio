import React from "react";

function Title({ title }) {
  return (
    <div className="section-title">
      <h2>{title || "Section Title"}</h2>
      <div className="underline"></div>
    </div>
  );
}

export default Title;
