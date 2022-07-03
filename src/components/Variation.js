import React from "react";

export default function Variation(props) {
  return (
    <div className="flex-container product-variation">
      <p>{props.label}:</p>
      <select>
        {props.options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
