import React from "react";

export default function Product(props) {
  const src = `${process.env.PUBLIC_URL}/img/${props.label}.svg`;
  return (
    <div className="product-card" onClick={props.handleClick}>
      <div>
        <img src={src} alt={props.label} />
      </div>
      {props.title ? <p>{props.title}</p> : null}
    </div>
  );
}
