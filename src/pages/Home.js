import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

export default function Home(props) {
  const noFilter = () => {
    props.updateFilter(false);
  };

  const handleSpecial = () => {
    props.updateFilter(props.filter.special);
  };

  const saleFilter = () => {
    props.updateFilter(props.filter.sale);
  };

  return (
    <div className="center-text">
      <div className="remove-child-padding">
        <h1>{props.brand}</h1>
        <p className="subheading">{props.tagline}</p>
      </div>
      <div className="tiled">
        <Link to="/shop" className="product-card">
          <Product label="ralts" title="Shop Pokemon" handleClick={noFilter} />
        </Link>
        <Link to="/shop">
          <Product
            label="azumarill"
            title="Shop Evolved"
            handleClick={handleSpecial}
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
