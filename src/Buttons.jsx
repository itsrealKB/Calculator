import React from "react";

export default function Buttons({ value, handleClick }) {
  let name = value === "=" ? "span-two" : "";

  return (
    <button className={name} name={value} value={value} onClick={handleClick}>
      {value}
    </button>
  );
}
