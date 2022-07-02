import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import "./css/app.css";

export default function App() {
  return (
    <div className="container">
      <header>
        <Nav brand="Rocket Industries" />
      </header>
      <main className="centered">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer className="flex-footer">
        <Footer />
      </footer>
    </div>
  );
}
