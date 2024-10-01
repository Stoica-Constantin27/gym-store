import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gym from "./pages/Gym";
import Store from "./components/store/Store";
import Cart from "./components/store/Cart";
import ProductDetails from "./components/store/ProductDetails";
import Navigation from "./components/Common/Navigation";
import { CartProvider } from "./context/CartContext";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import Footer from "./pages/Footer";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/product/:id" element={<ProductDetails />} />{" "}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
