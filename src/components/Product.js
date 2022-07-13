import React from "react";

export default function Product(props) {
  const src = `/img/${props.label}.svg`;
  return (
    <div className="product-card" onClick={props.handleClick}>
      <div>
        <img src={src} alt={props.label} />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
