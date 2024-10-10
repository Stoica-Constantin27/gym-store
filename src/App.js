import React, { useState, useEffect } from "react";
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
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/terms/TermsAndConditions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/login"
              element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
