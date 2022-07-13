import React, { useState } from "react";
import Variation from "../components/Variation";
import Count from "../components/Count";

export default function Details(props) {
  const [count, setCount] = useState(0);
  const path = window.location.href;
  const urlProduct = path.match(/product\/\s*([^\n\r]*)/);
  const MIN_QUANTITY = 0;
  const MAX_QUANTITY = 9;
  const current = props.products.find(
    (product) => product.name === urlProduct[1]
  );

  const handleClick = () => {
    const cart = props.cart;
    const isDupe =
      cart.items.length > 0
        ? cart.items.find((dupe) => dupe.product === current.name)
        : false;

    /*
      if the item already exists in the cart,
          simply update the quantity rather than re-adding the product 
          this prevents going over the max quantity
    */
    if (isDupe) {
      if (count === 0) {
        // if the quantity is zero, we should remove it from the cart
        const index = cart.items.findIndex(
          (item) => item.name === current.name
        );
        const newCart = cart.items;
        newCart.splice(index, 1);
        cart.setCart([...newCart]);
      } else {
        // otherwise just adjust the quantity
        isDupe.quanity = count;
        cart.setCart((prevCart) => [...prevCart]);
      }
    } else {
      // otherwise we can add the product to the cart normally
      const product = {
        product: current.name,
        quanity: count,
        cost: current.cost,
      };

      cart.updateCart(product);
    }
  };

  function incrCount() {
    if (count >= MAX_QUANTITY) {
      return;
    }

    const newCount = count + 1;
    setCount(newCount);
  }

  function decrCount() {
    if (count <= MIN_QUANTITY) {
      return;
    }

    const newCount = count - 1;
    setCount(newCount);
  }

  function productPage(product, sale) {
    if (product) {
      const productImg = `/img/${product.name}.svg`;
      const originalCost = product.cost;
      const salePrice = originalCost - originalCost * sale;
      const productPrice = product.sale[0]
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
              <Variation
                label={"Nature"}
                options={[
                  "Bashful",
                  "Docile",
                  "Hardy",
                  "Quirky",
                  "Serious",
                  "Adamant",
                  "Brave",
                  "Lonely",
                  "Naughty",
                  "Calm",
                  "Gentle",
                  "Sassy",
                  "Careful",
                  "Timid",
                  "Hasty",
                  "Jolly",
                  "Naive",
                ]}
              />
              <Count count={count} incr={incrCount} decr={decrCount} />
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
