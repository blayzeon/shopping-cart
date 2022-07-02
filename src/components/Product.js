import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Product(props) {
  const src = `/img/${props.label}.svg`;
  return (
    <div className="product-card" onClick={props.handleClick}>
      <img src={src} alt={props.label} />
      <p>{props.title}</p>
    </div>
  );
}
