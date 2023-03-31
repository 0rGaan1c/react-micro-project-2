import React from "react";
import "./index.css";

const index = ({ type, placeholder, setInputText, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setInputText(e.target.value);
      }}
    />
  );
};

export default index;
