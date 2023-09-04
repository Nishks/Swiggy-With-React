import { useState } from "react";
import { IMG_URL } from "../constant";

export const Title = () => (
  <a href="/">
    <img className="logo" alt="logo-image" src={IMG_URL} />
  </a>
);

// name of the component starts with capital letter
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
