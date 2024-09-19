import React from "react";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Community!</h1>
      <p>
        We're honored to have you here. Explore our wide range of features
        designed just for you. Whether you’re looking to get fit, find something
        special in our store, or just need a place to relax and chat, we’ve got
        you covered. Dive in and discover what makes us unique.
      </p>
      <a href="/signup" className="cta-button">
        Join Us Today
      </a>
    </div>
  );
};

export default HomePage;
