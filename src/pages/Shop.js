import React from "react";
import Product from "../components/Product";

export default function Shop(props) {
  const products =
    props.filter === false
      ? props.products
      : props.products.filter((product) =>
          product[props.filter.key].includes(props.filter.value)
        );

  return (
    <div className="tiled">
      {products.map((product) => {
        const type = product.type.join(" / ");
        const title = `${product.name} - ${type}`;
        return (
          <Product title={title} label={product.name} key={product.name} />
        );
      })}
    </div>
  );
}
