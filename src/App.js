import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import "./css/app.css";
import products from "./data/products.json";

export default function App() {
  const salePokemon = products.pokemon.filter(
    (pokemon) => pokemon.sale === "true"
  );

  const evolvedPokemon = products.pokemon.filter(
    (pokemon) => pokemon.evolved === "true"
  );

  const [filter, setFilter] = useState(false);
  const [cart, setCart] = useState([]);
  const sale = 0.2;

  function updateCart(productObj) {
    const isDupe =
      cart.length > 0
        ? cart.find(
            (dupe) =>
              dupe.product === productObj.product &&
              dupe.variation === productObj.variation
          )
        : false;

    if (isDupe) {
      if (productObj.quantity === 0) {
        // if the quantity is zero, we should remove it from the cart
        const index = cart.findIndex(
          (item) =>
            item.product === productObj.product &&
            item.variation === productObj.variation
        );
        const newCart = cart;
        newCart.splice(index, 1);
        setCart([...newCart]);
        return;
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
    if (filter) {
      setFilter([...filter]);
    } else {
      setFilter([...products.pokemon]);
    }
  }

  function doesInclude(item1, item2) {
    if (!item1) return false;
    if (!item2) return false;

    if (item1.includes(item2)) {
      return true;
    } else {
      return false;
    }
  }

  const brand = "Rocket Industries";
  const tagline =
    "Explore freshly caught, pre-trained Pokemon for a steal.  Why bother catching them yourself?";
  return (
    <div className="wrapper container">
      <header>
        <Nav
          brand={brand}
          cart={cart}
          products={products.pokemon}
          doesInclude={doesInclude}
          updateFilter={updateFilter}
        />
      </header>
      <main className="centered">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                brand={brand}
                tagline={tagline}
                doesInclude={doesInclude}
                updateFilter={updateFilter}
                filter={{ sale: salePokemon, special: evolvedPokemon }}
              />
            }
          />
          <Route
            path="/shop"
            element={<Shop products={products.pokemon} filter={filter} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateCart={updateCart} />}
          />
          <Route
            path="*"
            element={
              <Details
                products={products.pokemon}
                variations={products.variation}
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
