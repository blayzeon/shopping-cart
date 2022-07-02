import React from "react";

export default function Product(props) {
  const src = `/img/${props.label}.svg`;
  return (
    <div className="product-card">
      <img src={src} alt={props.label} />
      <p>{props.title}</p>
    </div>
  );
}
