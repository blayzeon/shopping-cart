import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="center-text">
      <div className="remove-child-padding">
        <h1>{props.brand}</h1>
        <p className="subheading">{props.tagline}</p>
      </div>
      <div className="tiled">
        <Link to="/shop" className="product-card">
          <Product label="bulbasaur" title="Shop Pokemon" />
        </Link>
        <Link to="/shop">
          <Product label="dratini" title="Shop Dragons" />
        </Link>
        <Link to="/shop">
          <Product label="meowth" title="Shop Clearance" />
        </Link>
      </div>
    </div>
  );
}
