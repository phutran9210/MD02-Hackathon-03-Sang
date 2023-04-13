import React from "react";

const TextArea = ({ value, onChange }) => {
  return (
    <textarea
      placeholder="Enter Yout Text Here"
      rows="10"
      cols="50"
      value={value}
      onChange={onChange}
    />
  );
};
export default TextArea;
