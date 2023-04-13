import React, { useState } from "react";
import TextStats from "./TextStats";
import TextArea from "./TextArea";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [caseType, setCaseType] = useState("none");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCaseChange = (caseType) => {
    setCaseType(caseType);
  };

  const countLetters = (text) => {
    return text.replace(/[^a-zA-Z]/g, "").length;
  };

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const countParagraphs = (text) => {
    return text
      .trim()
      .split(/\n+/)
      .filter((paragraph) => paragraph.trim().length > 0).length;
  };

  const formatText = (text, caseType) => {
    switch (caseType) {
      case "uppercase":
        return text.toUpperCase();
      case "lowercase":
        return text.toLowerCase();
      default:
        return text;
    }
  };

  return (
    <div>
      <TextStats
        letters={countLetters(text)}
        words={countWords(text)}
        paragraphs={countParagraphs(text)}
      />
      <TextArea value={formatText(text, caseType)} onChange={handleChange} />
      <div className="btn-primary">
        <button onClick={() => handleCaseChange("uppercase")}>Uppercase</button>
        <button onClick={() => handleCaseChange("lowercase")}>Lowercase</button>
      </div>
    </div>
  );
};

export default WordCounter;
