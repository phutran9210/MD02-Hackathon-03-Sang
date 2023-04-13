import React from "react";

const TextStats = ({ letters, words, paragraphs }) => {
  return (
    <div className="textStat">
      <div className="box word">Words: {words}</div>
      <div className="box letters">Letters: {letters}</div>
      <div className="box paragraph">Paragraphs: {paragraphs}</div>
    </div>
  );
};
export default TextStats;
