import React, { useState } from "react";

export default function Count(props) {
  const initial = props ? parseInt(props.count) : 0;
  const [count, setCount] = useState(initial);
  const MAX_QUANTITY = props.max ? parseInt(props.max) : 9999;
  const MIN_QUANTITY = props.min ? parseInt(props.min) : -9999;

  function incrCount() {
    if (count >= MAX_QUANTITY) {
      return;
    }

    const newCount = count + 1;
    setCount(newCount);

    props.onChange(newCount);
    return newCount;
  }

  function decrCount() {
    if (count <= MIN_QUANTITY) {
      return;
    }

    const newCount = count - 1;
    setCount(newCount);

    props.onChange(newCount);
    return newCount;
  }

  return (
    <div className="flex-container product-counter">
      <button onClick={decrCount}>-</button>
      <p>{count}</p>
      <button onClick={incrCount}>+</button>
    </div>
  );
}
