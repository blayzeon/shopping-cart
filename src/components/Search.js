import React from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  const elm = document.getElementById("nav-search");
  window.onkeydown = (e) => {
    if (e.keyCode === 13) {
      if (e.explicitOriginalTarget === elm) {
        handleClick();
      }
    }
  };

  const products = props.products;
  const doesInclude = props.doesInclude;

  const matches = [];
  const handleClick = () => {
    const query = elm.value.toLowerCase();
    products.forEach((product) => {
      if (
        doesInclude(query, product.name) ||
        doesInclude(query, product.type[0]) ||
        doesInclude(query, product.type[1])
      ) {
        matches.push(product);
      }
    });

    props.updateFilter(matches);
  };

  return (
    <>
      <input type="text" id="nav-search" />
      <Link onClick={handleClick} to="/shop">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="inherit"
            d="M22.535 22.647l-.394.908-.707-.309-.619-.619-.883-.972L18.12 19.8l-.664-1.562.865-.725 1.566.961 1.15 1.15 2.28 1.433.106 1.041-.888.55"
          ></path>
          <path
            d="M23.316 21.056l-3.181-3.182a1.682 1.682 0 00-1.814-.362s0-.028-.028-.028l-1.535-1.535c3.349-3.768 3.21-9.544-.39-13.144-3.74-3.74-9.824-3.74-13.563 0-3.74 3.74-3.74 9.823 0 13.562 1.87 1.87 4.325 2.791 6.781 2.791 2.288 0 4.549-.81 6.363-2.428l1.507 1.507a1.658 1.658 0 00.279 2.01l3.181 3.18c.335.336.754.503 1.172.503.419 0 .865-.167 1.172-.502.726-.67.726-1.73.056-2.372zM3.642 15.558c-3.293-3.293-3.293-8.651 0-11.972a8.458 8.458 0 015.972-2.484 8.41 8.41 0 015.972 2.484c3.321 3.321 3.321 8.68.028 11.972-3.293 3.321-8.68 3.321-11.972 0zm18.893 7.089a.54.54 0 01-.782 0l-3.18-3.182a.54.54 0 010-.781.551.551 0 01.39-.168c.14 0 .279.056.39.168l3.182 3.153a.573.573 0 010 .81z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </svg>
      </Link>
    </>
  );
}
