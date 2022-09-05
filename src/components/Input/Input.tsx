import React from 'react';
import "./style.scss";

export default function Input() {
  return (
    <input
      className="input"
      name="name"
      type="text"
      placeholder="Enter a number to convert"
      value=""
    />
  );
}
