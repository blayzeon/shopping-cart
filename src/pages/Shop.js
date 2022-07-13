import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

export default function Shop(props) {
  const products = props.filter === false ? props.products : props.filter;

  return (
    <>
      {products.length > 0 ? (
        <div className="tiled">
          {products.map((product) => {
            const type = product.type.join(" / ");
            const title = `${product.name} - ${type}`;
            const pathName = `/product/${product.name}`;
            return (
              <Link to={pathName} key={product.name}>
                <Product title={title} label={product.name} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <p>There are no products to display.</p>
          <Link to={"/"}>Return to Shop</Link>
        </div>
      )}
    </>
  );
}
