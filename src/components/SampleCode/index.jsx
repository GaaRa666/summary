import React from "react";
import "./style.css";

const SampleCode = () => {
  const sampleCodeExample = ` 
  <div class="golden-grid">
    <div
      style="grid-area:
        11 / 1 / span 10 / span 
        12;">
    </div>
  </div> 
`;
  return (
    <div className="sampleCode">
      <h2>Sample code</h2>
      <pre>{sampleCodeExample}</pre>
    </div>
  );
};
export default SampleCode;
