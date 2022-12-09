import React from "react";
import "./style.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SampleCode = () => {
  const sampleCodeExample = ` <div class="golden-grid">
    <div style="grid-area:
        11 / 1 / span 10 / span 
        12;">
    </div>
  </div> `;
  return (
    <div className="sampleCode">
      <h2>Sample code</h2>
      <SyntaxHighlighter
        children={sampleCodeExample}
        language="htmlbars"
        style={atelierForestLight}
        showLineNumbers
        lineNumberContainerStyle
      />
    </div>
  );
};
export default SampleCode;
