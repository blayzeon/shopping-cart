import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

export default function Home(props) {
  const noFilter = () => {
    props.updateFilter(false);
  };

  const dragonFilter = () => {
    props.updateFilter({ key: "type", value: "dragon" });
  };

  const saleFilter = () => {
    props.updateFilter({ key: "sale", value: "true" });
  };

  return (
    <div className="center-text">
      <div className="remove-child-padding">
        <h1>{props.brand}</h1>
        <p className="subheading">{props.tagline}</p>
      </div>
      <div className="tiled">
        <Link to="/shop" className="product-card">
          <Product
            label="bulbasaur"
            title="Shop Pokemon"
            handleClick={noFilter}
          />
        </Link>
        <Link to="/shop">
          <Product
            label="dratini"
            title="Shop Dragons"
            handleClick={dragonFilter}
          />
        </Link>
        <Link to="/shop">
          <Product
            label="meowth"
            title="Shop Clearance"
            handleClick={saleFilter}
          />
        </Link>
      </div>
    </div>
  );
}
