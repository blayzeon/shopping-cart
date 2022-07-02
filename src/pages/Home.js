import React from "react";
import Product from "../components/Product";

export default function Home(props) {
  return (
    <div className="center-text">
      <h1>{props.brand}</h1>
      <div className="tiled">
        <Product label="bulbasaur" title="Shop Pokemon" />
        <Product label="dratini" title="Shop Dragons" />
        <Product label="meowth" title="Shop Clearance" />
      </div>
    </div>
  );
}
