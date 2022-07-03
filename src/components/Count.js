import React from "react";

export default function Count(props) {
  return (
    <div className="flex-container product-counter">
      <button onClick={props.decr}>-</button>
      <p>{props.count}</p>
      <button onClick={props.incr}>+</button>
    </div>
  );
}
