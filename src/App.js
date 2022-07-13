import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import "./css/app.css";
import products from "./data/products.json";

export default function App() {
  const [filter, setFilter] = useState(false);
  const [cart, setCart] = useState([]);
  const sale = 0.2;

  function updateCart(productObj) {
    const newCart = cart;

    const isDupe =
      cart.length > 0
        ? cart.find((dupe) => dupe.product === productObj.product)
        : false;

    if (isDupe) {
      if (productObj.quantity === 0) {
        // if the quantity is zero, we should remove it from the cart
        const index = newCart.findIndex(
          (item) => item.name === productObj.name
        );

        newCart.splice(index, 1);
        setCart([...newCart]);
      } else {
        // otherwise just adjust the quantity
        isDupe.quantity = productObj.quantity;
        setCart((prevCart) => [...prevCart]);
      }
    } else {
      if (productObj.quantity === 0) {
        // don't add the item if the quantity is 0
        return;
      }
      setCart((prevCart) => [...prevCart, productObj]);
    }
  }

  function updateFilter(filter) {
    setFilter(filter);
  }

  const brand = "Rocket Industries";
  const tagline =
    "Explore freshly caught, pre-trained Pokemon for a steal.  Why bother catching them yourself?";
  return (
    <div className="container">
      <header>
        <Nav brand={brand} cart={cart} />
      </header>
      <main className="centered">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                brand={brand}
                tagline={tagline}
                updateFilter={updateFilter}
              />
            }
          />
          <Route
            path="/shop"
            element={<Shop products={products.pokemon} filter={filter} />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <Details
                products={products.pokemon}
                sale={sale}
                updateCart={updateCart}
              />
            }
          />
        </Routes>
      </main>
      <footer className="flex-footer">
        <Footer />
      </footer>
    </div>
  );
}
