import React from "react";
import { Link } from "react-router-dom";
import Count from "../components/Count";
import Product from "../components/Product";

export default function Cart(props) {
  const shippingEstimate = 6.5;
  let merchTotal = 0;

  const cart = props.cart;

  const handleCheckout = () => {
    alert(
      `We have changed your paypal $${parseFloat(
        merchTotal + shippingEstimate
      ).toFixed(2)}.  Thank you.`
    );
  };

  return (
    <>
      {cart.length > 0 ? (
        <div>
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

                merchTotal = merchTotal + item.cost * item.quantity;

                const key = `${item.product}-${item.variation}`;
                const pathName = `/product/${item.product}`;
                return (
                  <tr key={key}>
                    <td>
                      <Link to={pathName} key={item.product}>
                        <Product label={item.product} />
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
                    <td>${item.cost}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <hr className="faded" />
            <div className="summary-item">
              <span>Merchandise:</span>
              <span> ${merchTotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Estimated Shipping:</span>
              <span> ${shippingEstimate.toFixed(2)}</span>
            </div>
            <hr className="faded" />
            <div className="summary-item">
              <span>Sub Total:</span>
              <span> ${(merchTotal + shippingEstimate).toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <div>
          <p>There are currently no items in your cart.</p>
          <Link to={"/"}>Return to Shop</Link>
        </div>
      )}
    </>
  );
}
