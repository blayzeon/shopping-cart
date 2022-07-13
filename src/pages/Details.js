import React, { useState } from "react";
import Variation from "../components/Variation";
import Count from "../components/Count";

export default function Details(props) {
  const [count, setCount] = useState(1);
  const path = window.location.href;
  const urlProduct = path.match(/product\/\s*([^\n\r]*)/);
  const current = props.products.find(
    (product) => product.name === urlProduct[1]
  );

  function newCount(amount) {
    setCount(amount);
  }

  const handleClick = () => {
    const product = {
      product: current.name,
      quantity: count,
      cost: current.cost,
      variation: document.querySelector("select").value,
    };

    props.updateCart(product);
  };

  function productPage(product, sale) {
    if (product) {
      const productImg = `/img/${product.name}.svg`;
      const originalCost = product.cost;
      const salePrice = originalCost - originalCost * sale;
      const productPrice =
        product.sale === "true"
          ? parseFloat(salePrice).toFixed(2)
          : parseFloat(originalCost).toFixed(2);
      return (
        <div className="product-page">
          <div className="product-details">
            <img src={productImg} alt={product.name} />
            <div>
              <h3 className="product-name">{product.name}</h3>
              <p>Price: ${productPrice}</p>
            </div>
          </div>
          <div className="product-options">
            <div className="flex-pair">
              <Variation label={"Nature"} options={props.variations} />
              <Count count={count} min="0" max="9" onChange={newCount} />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product-details">
          <h1>404: Product Not Found</h1>
        </div>
      );
    }
  }

  return <div>{productPage(current, props.sale)}</div>;
}
