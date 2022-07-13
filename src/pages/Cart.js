import React from "react";
import { Link } from "react-router-dom";
import Count from "../components/Count";

export default function Cart(props) {
  const cart = props.cart;

  return (
    <div>
      {cart.length > 0 ? (
        <table className="product-table">
          <caption>Cart</caption>
          <thead>
            <tr>
              <td>Product</td>
              <td>Variation</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const handleChange = (amount) => {
                item.quantity = amount;
                props.updateCart(item);
              };
              const key = `${item.product}-${item.variation}`;
              const pathName = `/product/${item.product}`;
              return (
                <tr key={key}>
                  <td>
                    <Link to={pathName} key={item.product}>
                      <img
                        src={`/img/${item.product}.svg`}
                        alt={item.product}
                      />
                      {item.product}
                    </Link>
                  </td>
                  <td>{item.variation}</td>
                  <td>
                    <Count
                      count={item.quantity}
                      min="0"
                      max="9"
                      onChange={handleChange}
                    />
                  </td>
                  <td>{item.cost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <p>There are currently no items in your cart.</p>
          <Link to={"/"}>Return to Shop</Link>
        </div>
      )}
    </div>
  );
}
