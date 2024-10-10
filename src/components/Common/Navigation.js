import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navigation.css";

const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/logoImg/logoImg.jpg" alt="Site Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gym">Gym</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
