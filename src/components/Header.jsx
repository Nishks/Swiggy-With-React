import { useState } from "react";
import { IMG_URL } from "../constant";
import { Link } from "react-router-dom";

// Single Page Application
// client side routing and server side routing
// we are gonna implement client side routing as react already have those pages

export const Title = () => (
  <Link to="/">
    <img className="logo" alt="logo-image" src={IMG_URL} />
  </Link>
);

// name of the component starts with capital letter
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
