import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav container">
      <img src={Logo} />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
